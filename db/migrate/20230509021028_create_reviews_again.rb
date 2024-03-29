class CreateReviewsAgain < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.float :rating, null: false
      t.integer :reviewer_id, null: false
      t.integer :reviewed_listing_id, null: false
      t.integer :cleanliness, null: false
      t.integer :communication, null: false
      t.integer :check_in, null: false
      t.integer :accuracy, null: false
      t.integer :location, null: false
      t.integer :value, null: false
      t.timestamps
    end
    add_index :reviews, :reviewer_id 
    add_index :reviews, :reviewed_listing_id 
    
  end

end
