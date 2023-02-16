class AddCityAndState < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :city, :string, null: false, default: "NY"
    add_column :listings, :state, :string, null: false, default: "NY"
  end
end
