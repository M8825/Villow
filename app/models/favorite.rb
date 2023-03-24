# == Schema Information
#
# Table name: favorites
#
#  id           :bigint           not null, primary key
#  favoriter_id :bigint
#  listing_id   :bigint
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Favorite < ApplicationRecord
  belongs_to :favoriter, class_name: :User, foreign_key: :favoriter_id
  belongs_to :listing, class_name: :Listing, foreign_key: :listing_id
end
