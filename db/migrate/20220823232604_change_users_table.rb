class ChangeUsersTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :reserved_status
    add_column :listings, :reserved_status, :boolean
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
