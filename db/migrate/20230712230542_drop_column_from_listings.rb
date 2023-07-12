class DropColumnFromListings < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :guests
  end
end
