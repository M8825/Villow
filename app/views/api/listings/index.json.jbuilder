@listings.each do |listing|
  json.set! listing.id do
    # NOTE(mlkz): Specify the partial to render. When I user this index
    # file in FavoritesController#index without specifying the partial exact
    # location, it will look for the partial in the /api/favorites/ directory
    json.partial! "api/listings/listing", listing: listing
  end
end
