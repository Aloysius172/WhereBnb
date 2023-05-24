class Listing < ApplicationRecord
  validates :owner_id, :title, :description, :price, :rooms, :beds, :property_type, :longitude, :latitude, presence: true

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: 'User'

  has_many :reservations,
  primary_key: :id,
  foreign_key: :listing_id,
  class_name: :Listing

  has_many :reviews,
  primary_key: :id,
  foreign_key: :reviewed_listing_id,
  class_name: :Listing


end
