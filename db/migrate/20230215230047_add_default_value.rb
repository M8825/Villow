class AddDefaultValue < ActiveRecord::Migration[7.0]
  def change
    change_column_default :listings, :views, 0
  end
end
