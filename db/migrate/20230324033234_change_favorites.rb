class ChangeFavorites < ActiveRecord::Migration[7.0]
  def change
    rename_column :favorites, :liker_id, :favoriter_id
    # Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
