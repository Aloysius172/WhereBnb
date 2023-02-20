class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :reviewer_id, null: false
      t.integer :reviewed_listing_id, null: false
      t.integer :rating, null: false

      t.timestamps
    end
    add_index :reviews, :reviewer_id
    add_index :reviews, :reviewed_listing_id
  end
end
