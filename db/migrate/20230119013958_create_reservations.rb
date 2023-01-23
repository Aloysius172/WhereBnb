class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :listing_id, null: false
      t.integer :reserver_id, null: false
      t.date :reservation_start, null: false
      t.date :reservation_end, null: false

      t.timestamps
    end

    add_index :reservations, :listing_id
    add_index :reservations, :reserver_id
    add_index :reservations, :reservation_start
    add_index :reservations, :reservation_end
  end
end
