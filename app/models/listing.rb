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
#  price_sqft    :integer          not null
#  overview      :text             not null
#  key_words     :text             not null
#  listing_by    :string           not null
#  views         :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
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
            presence: true

  has_many_attached :photos
end
