class AddOwnerId < ActiveRecord::Migration[7.0]
  def change
    add_reference :listings, :owner, foreign_key: { to_table: :users }
    # Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
