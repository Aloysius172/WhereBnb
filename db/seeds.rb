# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Listing.destroy_all

#Users
demo = User.create!(username: "demologin",email: "demo@email.com", password: 'demo123')
alo = User.create!(username: "alo1",email: "alo1@email.com", password: '123456')
kyle = User.create!(username: "kyleg",email: "kyleg@email.com", password: '123456')
amin = User.create!(username: "aminb",email: "aminb@email.com", password: '123456')

# Listings
brownstone = Listing.create!(
  owner_id: alo.id,
  title: "Brooklyn Brownstone", 
  reserved_status: false,
  description: "Lovely Brownstone in BedStuy", 
  price: 450.00, 
  rooms: 4, 
  beds: 4, 
  bathrooms: 2, 
  property_type: "Brownstone", 
  longitude: 0.000001, 
  latitude: 0.000002
)
 
duplex = Listing.create!(
  owner_id: kyle.id,
  title: "Bronx Duplex", 
  reserved_status: false,
  description: "First floor of a 2 family unit in the Bronx", 
  price: 375.00, 
  rooms: 3, 
  beds: 3, 
  bathrooms: 2, 
  property_type: "Duplex", 
  longitude: 0.500001, 
  latitude: 0.500002
)
 
beachfront = Listing.create!(
  owner_id: amin.id,
  title: "Jersey Beach Front House", 
  reserved_status: false,
  description: "Beautiful house orverlooking the Jersey Shore", 
  price: 600.00, 
  rooms: 5, 
  beds: 5, 
  bathrooms: 3, 
  property_type: "Duplex", 
  longitude: 0.300001, 
  latitude: 0.300002
)

