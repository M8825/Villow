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
  # receives a string representing state - "NY" or city - "Brooklyn" and returns
  # an array of suffestion "City, State" names from database based on the search_string
  def self.searchByState(search_string, term)
    city_state_array =
      where(
        "#{term} ILIKE :search_string",
        search_string: "%#{Listing.sanitize_sql_like(search_string)}%"
      ).take(5).pluck("city", "state")

    city_state_array.map { |city_state| city_state.join(", ") }
  end

  # receives a string like "New York, NY" and return an array of listings
  # based on the search_sting
  def self.searchByCityState(search_string)
    city = search_string.split(",")[0].strip

    where(
      "city ILIKE :search_string",
      search_string: "%#{Listing.sanitize_sql_like(city)}%"
    )
  end

  # NOTE(mlkz): not in use
  def self.search(search_term)
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
end
