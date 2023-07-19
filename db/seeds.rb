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
pheaze = User.create!(username: "alpha1",email: "alpha1@email.com", password: '123456')
larry = User.create!(username: "larry",email: "larry@email.com", password: '123456')
junior = User.create!(username: "junior",email: "junior@email.com", password: '123456')
nneka = User.create!(username: "nneka",email: "nneka.com", password: '123456')
john = User.create!(username: "john",email: "john.com", password: '123456')
tina = User.create!(username: "tina",email: "tina@email.com", password: '123456')
# Listings
brownstone = Listing.create!(
  owner_id: alo.id,
  title: "Brooklyn Brownstone", 
  reserved_status: false,
  description: "Lovely Brownstone in BedStuy", 
  price: 450.00, 
  rooms: 4, 
  beds: 4, 
  guests: 8,
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
  guests: 6,
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
  guests: 10,
  bathrooms: 3, 
  property_type: "Duplex", 
  longitude: 0.300001, 
  latitude: 0.300002
)

mansion = Listing.create!(
  owner_id: pheaze.id,
  title: "Lavish Mansion", 
  reserved_status: false,
  description: "Large mansion in the Northern Los Angeles area", 
  price: 4000.00, 
  rooms: 9, 
  beds: 9, 
  guests: 20,
  bathrooms: 6, 
  property_type: "Mansion", 
  longitude: 0.345674, 
  latitude: 0.1234567
)

lakefront = Listing.create!(
  owner_id: larry.id,
  title: "The House by the Lake ", 
  reserved_status: false,
  description: "Lakefront house with access to lake and surrounding area", 
  price: 700.00, 
  rooms: 5, 
  beds: 5, 
  bathrooms: 3, 
  property_type: "House", 
  longitude: 0.300001, 
  latitude: 0.300002
)

haunted = Listing.create!(
  owner_id: junior.id,
  title: "Hanted House in the Middle of nowhere", 
  reserved_status: false,
  description: "One of the haunted houses from Scooby-doo", 
  price: 600.00, 
  rooms: 4, 
  beds: 4, 
  guests: 8,
  bathrooms: 2, 
  property_type: "House", 
  longitude: 0.94640, 
  latitude: 84.2902
)

house = Listing.create!(
  owner_id: nneka.id,
  title: "Just a house", 
  reserved_status: false,
  description: "It really just a house", 
  price: 250.00, 
  rooms: 3, 
  beds: 3, 
  guests: 7,
  bathrooms: 1, 
  property_type: "House", 
  longitude: 0.330001, 
  latitude: 0.30456
)

cottage = Listing.create!(
  owner_id: john.id,
  title: "A cottage in the woods", 
  reserved_status: false,
  description: "A small cottage in the woods. Shotgun for bears included", 
  price: 300.00, 
  rooms: 2, 
  beds: 2, 
  guests: 6,
  bathrooms: 1, 
  property_type: "Cottage", 
  longitude: 0.87434, 
  latitude: 0.09456
)

igloo = Listing.create!(
  owner_id: tina.id,
  title: "Igloo w no door", 
  reserved_status: false,
  description: "Bundle up because this is an igloo with no door", 
  price: 45.00, 
  rooms: 1, 
  beds: 0, 
  guests: 3,
  bathrooms: 0, 
  property_type: "House", 
  longitude: 0.00000, 
  latitude: 0.00000
)

anotherhouse = Listing.create!(
  owner_id: alo.id,
  title: "Another House", 
  reserved_status: false,
  description: "Its another house", 
  price: 300.00, 
  rooms: 3, 
  beds: 3, 
  guests: 6,
  bathrooms: 2, 
  property_type: "House", 
  longitude: 0.6929, 
  latitude: 0.39722
)

studio = Listing.create!(
  owner_id: alo.id,
  title: "Brooklyn Studio", 
  reserved_status: false,
  description: "Large studio next to the J train", 
  price: 200.00, 
  rooms: 0, 
  beds: 1, 
  guests: 2,
  bathrooms: 1, 
  property_type: "Studio", 
  longitude: 0.300001, 
  latitude: 0.300002
)

myhouse = Listing.create!(
  owner_id: alo.id,
  title: "Bronx House", 
  reserved_status: false,
  description: "Its a house in the Bronx", 
  price: 1000.00, 
  rooms: 4, 
  beds: 4, 
  guests: 8,
  bathrooms: 2, 
  property_type: "Duplex", 
  longitude: 0.300001, 
  latitude: 0.300002
)

