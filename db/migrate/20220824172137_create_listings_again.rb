class CreateListingsAgain < ActiveRecord::Migration[5.2]
  def change
   create_table :listings do |t|
      t.string :title, null: false
      t.boolean :reserved_status, null: false, default: false
      t.integer :owner_id, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.integer :rooms, null: false
      t.integer :beds, null: false
      t.integer :bathrooms, null: false
      t.string :property_type, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
  
      t.timestamps
    end
    add_index :listings, :title
    add_index :listings, :owner_id
  end
end
