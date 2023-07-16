class AddColumnToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :guests, :integer, null: false, default: 1 
  end
end
