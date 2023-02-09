class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.integer :price, null: false
      t.integer :bedroom, null: false
      t.integer :bathroom, null: false
      t.integer :sqft, null: false
      t.string :address, null: false
      t.string :listing_type, null: false
      t.string :est_payment, null: false
      t.string :building_type, null: false
      t.integer :built_in, null: false
      t.boolean :heating
      t.boolean :ac
      t.boolean :garage
      t.integer :price_sqft, null: false
      t.text :overview, null: false
      t.text :key_words, null: false
      t.string :listing_by, null: false
      t.integer :views

      t.timestamps
    end
  end
end
