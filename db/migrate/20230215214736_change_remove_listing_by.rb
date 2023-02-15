class ChangeRemoveListingBy < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :listing_by
  end
end
