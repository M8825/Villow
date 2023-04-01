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
  def self.getSuggestionsByAddress(street_address_str)
    query_db_suggestions(street_address_str, "address")
  end

  # receives a string representing state - "NY" - and returns
  # an array of suffestion "City, State" names from database based on the state_name_str
  def self.getSuggestionsByState(state_name_str, term)
    city_state_suggestions_array = query_db_suggestions(state_name_str, term)

    city_state_suggestions_array.map { |city_state| city_state.join(", ") }
  end

  # receives a string representing state city - "Brooklyn" and returns
  # an array of suffestion "City, State" names from database based on the city_names_str
  def self.getSuggestionsByCity(city_names_str)
    city_names_arr = city_names_str.split(",")

    suggestions =
      city_names_arr.map do |city_name|
        city_record = query_db_suggestions(city_name.strip, "city")
        city_record.empty? ? nil : city_record.first.join(", ") # return nil if city_record is empty
      end

    suggestions.compact # get rid of nil values
  end

  # receives a string representing state zipcode - "120" and returns
  # an array of suffestion "City, State" names from database based on the zipcode
  def self.getSuggestionsByZipCode(zipcode)
    Listing.query_db_suggestions(zipcode, "zipcode")
  end

  # receives a string like "New York, NY" and return an array of listings
  # based on the search_sting
  def self.searchByCityState(search_string, term)
    city = search_string.split(",")[0].strip

    where(
      "#{term}::text ILIKE :search_string",
      search_string: "%#{Listing.sanitize_sql_like(city.to_s)}%"
    )
  end

  def self.searchByStreetAddress(street_address, term)
    where(
      "address ILIKE :search_string",
      search_string: "%#{Listing.sanitize_sql_like(street_address.strip)}%"
    )
  end

  def self.search(search_term)
    # NOTE(mlkz): not in use
    where(
      "address ILIKE :search_term OR city ILIKE :search_term OR state ILIKE :search_term OR zipcode::text ILIKE :search_term",
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

  private_class_method

  def self.query_db_suggestions(search_string, term)
    five_results =
      where(
        "#{term}::text ILIKE :search_string",
        search_string: "%#{Listing.sanitize_sql_like(search_string)}%"
      ).take(5)

    if term == "zipcode"
      five_results.pluck("zipcode").uniq.map(&:to_s)
    elsif term == "address"
      five_results.pluck("address").uniq
    else
      five_results.pluck("city", "state").uniq
    end
  end
end
