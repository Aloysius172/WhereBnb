class Listing < ApplicationRecord
  validates :owner_id, :title, :description, :price, :rooms, :beds, :property_type, :longitude, :latitude, presence: true

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: 'User'


end
