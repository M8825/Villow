# frozen_string_literal: true

# == Schema Information
# Table name: listings
#
#  id            :bigint           not null, primary key
#  price         :integer          not null
#  bedroom       :integer          not null
#  bathroom      :integer          not null
#  sqft          :integer          not null
#  address       :string           not null
#  listing_type  :string           not null
#  est_payment   :string           not null
#  building_type :string           not null
#  built_in      :integer          not null
#  heating       :boolean
#  ac            :boolean
#  garage        :boolean
#  price_sqft    :float            not null
#  overview      :text             not null
#  key_words     :text             not null
#  views         :integer          default(0)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  zipcode       :integer          not null
#  owner_id      :bigint
#  city          :string           default("NY"), not null
#  state         :string           default("NY"), not null
#  lat           :float
#  lng           :float
#
class Listing < ApplicationRecord
  def self.get_suggestions_by_address(street_address_str)
    query_db_suggestions(street_address_str, 'address')
  end

  # receives a string representing state - "NY" - and returns
  # an array of suffestion "City, State" names from database based on the state_name_str
  def self.getsuggestions_by_state(state_name_str, column_name)
    city_state_suggestions_array =
      query_db_suggestions(state_name_str, column_name)

    city_state_suggestions_array.map { |city_state| city_state.join(', ') }
  end

  # receives a string representing state city - "Brooklyn" and returns
  # an array of suffestion "City, State" names from database based on the city_names_str
  def self.get_suggestions_by_city(params_hash)
    city_names_arr = params_hash[:city].split(',')

    query_orm_hash = new Hash

    filters_hash
      .except(:city)
      .each do |key, value|
        next unless Listing.column_names.include?(key)

        query_orm_hash["#{key}::text ILIKE :#{key}"] = {
          "#{key}": "%#{Listing.sanitize_sql_like(value)}%"
        }
      end

    query =
      where(
        "LOWER(TRIM(#{column_name}::text)) ILIKE :search_string",
        search_string: "%#{Listing.sanitize_sql_like(search_string)}%"
      ).take(5)

    suggestions =
      city_names_arr.map do |city_name|
        listings =
          where(
            'city ILIKE :city',
            city: "%#{Listing.sanitize_sql_like(city_name.strip)}%"
          )
        unless query_orm_hash.empty?
          listings =
            listings.where(
              query_orm_hash.keys.join(' AND '),
              query_orm_hash.values.join(', ')
            )
        end
        city_record = query_db_suggestions(city_name.strip, 'city')
        city_record.empty? ? nil : city_record.first.join(', ') # return nil if city_record is empty
      end

    suggestions.compact # get rid of nil values
  end

  # receives a string representing state zipcode - "120" and returns
  # an array of suffestion "City, State" names from database based on the zipcode
  def self.get_suggestions_by_zip(zipcode)
    Listing.query_db_suggestions(zipcode, 'zipcode')
  end

  # receives a string like "New York, NY" and return an array of listings
  # based on the search_sting
  def self.search_city_state_zip(filters_hash)
    query_orm_hash = new Hash

    filters_hash.each do |key, value|
      next unless Listing.column_names.include?(key)

      query_orm_hash["#{key}::text ILIKE :#{key}"] = {
        "#{key}": "%#{Listing.sanitize_sql_like(value)}%"
      }
    end

    return unless query_orm_hash.empty?

    where(query_orm_hash.keys.join(' AND '), query_orm_hash.values.join(', '))
  end

  def self.search_street_address(street_address, _term)
    where(
      'address ILIKE :search_string',
      search_string: "%#{Listing.sanitize_sql_like(street_address.strip)}%"
    )
  end

  def self.search(search_term)
    # NOTE(mlkz): not in use
    where(
      'address ILIKE :search_term OR city ILIKE :search_term OR state ILIKE :search_term OR zipcode::text ILIKE :search_term',
      search_term: "%#{sanitize_sql_like(search_term)}%"
    )
  end

  validates :price,
            :bedroom,
            :bathroom,
            :sqft,
            :address,
            :listing_type,
            :est_payment,
            :building_type,
            :built_in,
            :price_sqft,
            :overview,
            :key_words,
            :zipcode,
            :city,
            :state,
            :lat,
            :lng,
            presence: true

  belongs_to :owner, class_name: :User, foreign_key: :owner_id

  has_many :favorites,
           class_name: :Favorite,
           foreign_key: :listing_id,
           dependent: :destroy

  has_many :favoriter, through: :favorites, source: :favoriter

  has_many_attached :photos, dependent: :destroy

  # Query database for suggestions based on search term(column_name)
  # returns an array of 5 suggestions.
  def self.query_db_suggestions(search_string, column_name)
    query =
      where(
        "LOWER(TRIM(#{column_name}::text)) ILIKE :search_string",
        search_string: "%#{Listing.sanitize_sql_like(search_string)}%"
      ).take(5)

    five_suggestions(column_name, query)
  end

  # Generates and returns an array of 5 suggestions based on the search term
  def self.five_suggestions(column_name, five_results)
    if column_name == 'zipcode'
      five_results.pluck('zipcode').map(&:to_s).uniq
    elsif column_name == 'address'
      five_results.pluck('address').uniq
    else
      five_results.pluck('city', 'state').uniq
    end
  end

  # Separate city from "City, St" string and grab only city name
  def self.separate_city_name(search_string, column_name)
    column_name == 'city' ? search_string.split(',')[0].strip : search_string
  end
end
