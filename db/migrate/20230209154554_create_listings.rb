class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.integer :price, null: false
      t.integer :bedroom, null: false

      t.timestamps
    end
  end
end
