class ChangeUsersEmail < ActiveRecord::Migration[7.0]
  def change
    add_index :users, :email, unique: true
    change_column_null :users, :email, false
  end
end
