# == Schema Information
#
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
