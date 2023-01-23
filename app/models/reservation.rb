class Reservation < ApplicationRecord
  validates :listing_id, :reserver_id, :reservation_start, :reservation_end, presence: true

  belongs_to :listing,
  primary_key: :id,
  foreign_key: :listing_id,
  class_name: :Listing

  belongs_to :reserver,
  primary_key: :id,
  foreign_key: :reserver_id,
  class_name: :User

end
