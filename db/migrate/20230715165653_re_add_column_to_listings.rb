class ReAddColumnToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :guests, :integer, null: false, default: 1
    #Ex:- :null => false
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
