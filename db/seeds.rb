# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Listing.destroy_all

  puts "Resetting primary keys..."
  ApplicationRecord.connection.reset_pk_sequence!("users")

  puts "Creating users..."
  User.create!(email: "mlkz@gmail.com", password: "Ilmangel123!")

  puts "Creating Listing..."
  Listing.create(
    price: 700_000,
    bedroom: 3,
    bathroom: 2,
    sqft: 1500,
    address: "100 Main St, New York, NY 10001",
    listing_type: "Sale",
    est_payment: "$3500/month",
    building_type: "Apartment",
    built_in: 1990,
    heating: true,
    ac: true,
    garage: true,
    price_sqft: 467,
    overview: "Beautiful 3BR 2BA apartment in the heart of NYC",
    key_words: "NYC, Apartment, Sale",
    listing_by: "John Doe",
    views: 0,
    zipcode: 10_001
  )

  Listing.create(
    price: 900_000,
    bedroom: 4,
    bathroom: 3,
    sqft: 2000,
    address: "200 Park Ave, New York, NY 10007",
    listing_type: "Rent",
    est_payment: "$4500/month",
    building_type: "Condo",
    built_in: 2000,
    heating: true,
    ac: true,
    garage: true,
    price_sqft: 450,
    overview: "Spacious 4BR 3BA condo with stunning views of Central Park",
    key_words: "NYC, Condo, Rent",
    listing_by: "Jane Doe",
    views: 0,
    zipcode: 10_007
  )

  Listing.create(
    price: 500_000,
    bedroom: 2,
    bathroom: 1,
    sqft: 1000,
    address: "300 Broadway, New York, NY 10007",
    listing_type: "Sale",
    est_payment: "$2500/month",
    building_type: "Co-op",
    built_in: 1980,
    heating: true,
    ac: true,
    garage: false,
    price_sqft: 500,
    overview: "Charming 2BR 1BA co-op in the heart of NYC",
    key_words: "NYC, Co-op, Sale",
    listing_by: "John Smith",
    views: 0,
    zipcode: 10_007
  )

  Listing.create(
    price: 800_000,
    bedroom: 3,
    bathroom: 2,
    sqft: 1700,
    address: "400 5th Ave, New York, NY 10016",
    listing_type: "Rent",
    est_payment: "$4000/month",
    building_type: "Apartment",
    built_in: 1990,
    heating: true,
    ac: true,
    garage: true,
    price_sqft: 470,
    overview: "Spacious 3BR 2BA apartment with breathtaking views of the city",
    key_words: "NYC, Apartment, Rent",
    listing_by: "Jane Smith",
    views: 0,
    zipcode: 10_016
  )

  Listing.create(
    price: 600_000,
    bedroom: 2,
    bathroom: 2,
    sqft: 1300,
    address: "500 6th Ave, New York, NY 10011",
    listing_type: "Sale",
    est_payment: "$3000/month",
    building_type: "Condo",
    built_in: 2000,
    heating: true,
    ac: true,
    garage: false,
    price_sqft: 462,
    overview: "Stylish 2BR 2BA condo in the heart of NYC",
    key_words: "NYC, Condo, Sale",
    listing_by: "John Brown",
    views: 0,
    zipcode: 10_011
  )

  puts "Done!"
end
