class ChangePriceSqft < ActiveRecord::Migration[7.0]
  def change
    change_column :listings, :price_sqft, :float
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
