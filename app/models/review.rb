class Review < ApplicationRecord
  validates :body, :reviewer_id, :reviewed_listing_id, :rating, presence :true
  validates :rating, inclusion: { in: (1..5) }

    belongs_to :listing,
      primary_key: :id,
      foreign_key: :reviewed_listing_id,
      class_name: :Listing

    
    belongs_to :reviewer,
      primary_key: :id,
      foreign_key: :reviewer_id,
      class_name: :User 


end
