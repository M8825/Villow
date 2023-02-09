class ChangeListings < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :zipcode, :integer, null: false
  end
end
