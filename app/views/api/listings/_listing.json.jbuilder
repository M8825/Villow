json.extract! listing,
              :id,
              :price,
              :bedroom,
              :bathroom,
              :sqft,
              :address,
              :listing_type,
              :est_payment,
              :building_type,
              :built_in,
              :heating,
              :ac,
              :garage,
              :price_sqft,
              :overview,
              :key_words,
              :listing_by,
              :views,
              :created_at,
              :updated_at

# json.photoUrl listing.photos.attached? ? url_for(listing.photos) : nil
# json.photo_url listing.photos.attached? ? rails_blob_url(listing.photos) : nil

json.image_urls do
  json.array!(listing.photos) { |photo| json.image_url url_for(photo) }
end
