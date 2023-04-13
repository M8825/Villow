require "open-uri"

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
  ApplicationRecord.connection.reset_pk_sequence!("listings")

  puts "Creating users..."
  User.create!(email: "mlkz@gmail.com", password: "Ilmangel123!")
  User.create!(email: "foo@gmail.com", password: "Ilmangel123!")
  User.create!(email: "bar@gmail.com", password: "Ilmangel123!")

  puts "Creating Listing..."

  l1 =
    Listing.create(
      price: 3_150,
      bedroom: 1,
      bathroom: 1,
      sqft: 750,
      address: "308 E 79th St, New York, NY 10075",
      city: "New York",
      state: "NY",
      listing_type: "Rent",
      est_payment: "$315/month",
      building_type: "Apartment",
      built_in: 1970,
      heating: true,
      ac: true,
      garage: false,
      price_sqft: 4,
      overview:
        "Charming one-bedroom apartment in a well-maintained building! This bright apartment features hardwood floors, a separate kitchen, and ample closet space. The building offers laundry facilities and a live-in super. Conveniently located near transportation, shops, and restaurants.",
      key_words: "1BR HARDWOOD FLOORS SEPARATE KITCHEN LAUNDRY",
      views: 0,
      zipcode: 10_075,
      owner_id: 1,
      lat: 40.773487,
      lng: -73.949141
    )

  l2 =
    Listing.create(
      price: 900_000,
      bedroom: 4,
      bathroom: 3,
      sqft: 2000,
      address: "200 Park Ave, New York, NY 10007",
      city: "New York",
      state: "NY",
      listing_type: "Rent",
      est_payment: "$4500/month",
      building_type: "Condo",
      built_in: 2000,
      heating: true,
      ac: true,
      garage: true,
      price_sqft: 450,
      overview:
        "Spacious 4BR 3BA condo with stunning views of Central Park Stylish, Spacious Alcove Studio just steps from Central Park, Fifth Avenue and Carnegie Hall! You can live in the middle of it all!  Priced for an all cash deal!
    This huge alcove studio (approx. 600sf) has been completely gut renovated and cleverly converted into a Junior 2 bedroom apartment.   The gorgeous full separate kitchen features granite counters and flooring, subway tile backsplash, tons of cabinet space... a kitchen that is beautiful to look at and functional for entertaining. The stunning bathroom has marble walls and floors, and lovely mosaic tiled shower, European style pedestal sink and Kohler fixtures.
    This unique apartment has beautiful solid oak parquet floors, plenty of storage and so much more.
    The pet-friendly, full service building has a full time doorman, Concierge, valet and an on-site garage where residents receive a 25% discount. We are close to most subway lines as well as the cross-town buses. There is a monthly special assessment of $220.07 through 2/28/23, in addition to the maintenance.",
      key_words: "DOORMAN STORAGE ELEVATOR STUDIO ALCOVE BATHROOM",
      views: 0,
      zipcode: 10_007,
      owner_id: 1
    )

  l3 =
    Listing.create(
      price: 500_000,
      bedroom: 2,
      bathroom: 1,
      sqft: 1000,
      address: "300 Broadway, New York, NY 10007",
      city: "New York",
      state: "NY",
      listing_type: "Sale",
      est_payment: "$2500/month",
      building_type: "Co-op",
      built_in: 1980,
      heating: true,
      ac: true,
      garage: false,
      price_sqft: 500,
      overview:
        "Spacious 4BR 3BA condo with stunning views of Central Park Stylish, Spacious Alcove Studio just steps from Central Park, Fifth Avenue and Carnegie Hall! You can live in the middle of it all!  Priced for an all cash deal!
    This huge alcove studio (approx. 600sf) has been completely gut renovated and cleverly converted into a Junior 2 bedroom apartment.   The gorgeous full separate kitchen features granite counters and flooring, subway tile backsplash, tons of cabinet space... a kitchen that is beautiful to look at and functional for entertaining. The stunning bathroom has marble walls and floors, and lovely mosaic tiled shower, European style pedestal sink and Kohler fixtures.
    This unique apartment has beautiful solid oak parquet floors, plenty of storage and so much more.
    The pet-friendly, full service building has a full time doorman, Concierge, valet and an on-site garage where residents receive a 25% discount. We are close to most subway lines as well as the cross-town buses. There is a monthly special assessment of $220.07 through 2/28/23, in addition to the maintenance.",
      key_words: "ALCOVE ELEVATOR STORAGE STUDIO BATHROOM DOORMAN",
      views: 0,
      zipcode: 10_007,
      owner_id: 2
    )

  l4 =
    Listing.create(
      price: 800_000,
      bedroom: 3,
      bathroom: 2,
      sqft: 1700,
      address: "400 5th Ave, New York, NY 10016",
      city: "New York",
      state: "NY",
      listing_type: "Rent",
      est_payment: "$4000/month",
      building_type: "Apartment",
      built_in: 1990,
      heating: true,
      ac: true,
      garage: true,
      price_sqft: 470,
      overview:
        "Spacious 4BR 3BA condo with stunning views of Central Park Stylish, Spacious Alcove Studio just steps from Central Park, Fifth Avenue and Carnegie Hall! You can live in the middle of it all!  Priced for an all cash deal!
    This huge alcove studio (approx. 600sf) has been completely gut renovated and cleverly converted into a Junior 2 bedroom apartment.   The gorgeous full separate kitchen features granite counters and flooring, subway tile backsplash, tons of cabinet space... a kitchen that is beautiful to look at and functional for entertaining. The stunning bathroom has marble walls and floors, and lovely mosaic tiled shower, European style pedestal sink and Kohler fixtures.
    This unique apartment has beautiful solid oak parquet floors, plenty of storage and so much more.
    The pet-friendly, full service building has a full time doorman, Concierge, valet and an on-site garage where residents receive a 25% discount. We are close to most subway lines as well as the cross-town buses. There is a monthly special assessment of $220.07 through 2/28/23, in addition to the maintenance.",
      key_words: "BATHROOM STORAGE DOORMAN STUDIO ELEVATOR ALCOVE",
      views: 0,
      zipcode: 10_016,
      owner_id: 1
    )

  l5 =
    Listing.create(
      price: 600_000,
      bedroom: 2,
      bathroom: 2,
      sqft: 1300,
      address: "500 6th Ave, New York, NY 10011",
      city: "New York",
      state: "NY",
      listing_type: "Sale",
      est_payment: "$3000/month",
      building_type: "Condo",
      built_in: 2000,
      heating: true,
      ac: true,
      garage: false,
      price_sqft: 462,
      overview:
        "Spacious 4BR 3BA condo with stunning views of Central Park Stylish, Spacious Alcove Studio just steps from Central Park, Fifth Avenue and Carnegie Hall! You can live in the middle of it all!  Priced for an all cash deal!
    This huge alcove studio (approx. 600sf) has been completely gut renovated and cleverly converted into a Junior 2 bedroom apartment.   The gorgeous full separate kitchen features granite counters and flooring, subway tile backsplash, tons of cabinet space... a kitchen that is beautiful to look at and functional for entertaining. The stunning bathroom has marble walls and floors, and lovely mosaic tiled shower, European style pedestal sink and Kohler fixtures.
    This unique apartment has beautiful solid oak parquet floors, plenty of storage and so much more.
    The pet-friendly, full service building has a full time doorman, Concierge, valet and an on-site garage where residents receive a 25% discount. We are close to most subway lines as well as the cross-town buses. There is a monthly special assessment of $220.07 through 2/28/23, in addition to the maintenance.",
      key_words: "ELEVATOR STUDIO BATHROOM DOORMAN STORAGE ALCOVE",
      views: 0,
      zipcode: 10_011,
      owner_id: 2
    )

  l6 =
    Listing.create(
      price: 175_000,
      bedroom: 1,
      bathroom: 1,
      sqft: 600,
      address: "500 E 77th St, New York, NY 10162",
      city: "New York",
      state: "NY",
      listing_type: "Rent",
      est_payment: "$1750/month",
      building_type: "Apartment",
      built_in: 1985,
      heating: true,
      ac: true,
      garage: true,
      price_sqft: 292,
      overview:
        "Beautiful and sunny one-bedroom apartment in the heart of Upper East Side! This lovely apartment features hardwood floors, a large living room, updated kitchen, king-size bedroom, and updated bathroom. The building offers 24-hour doorman, elevator, laundry, and gym. Close to many fine restaurants, shopping, and transportation.",
      key_words: "1BR ELEVATOR DOORMAN GYM HARDWOOD FLOORS LAUNDRY",
      views: 0,
      zipcode: 10_162,
      owner_id: 1
    )

  # ---
  l7 =
    Listing.create(
      price: 1_250_000,
      bedroom: 3,
      bathroom: 2,
      sqft: 1500,
      address: "1160 3rd Ave, New York, NY 10065",
      city: "New York",
      state: "NY",
      listing_type: "Sale",
      est_payment: "$6250/month",
      building_type: "Condo",
      built_in: 2007,
      heating: true,
      ac: true,
      garage: true,
      price_sqft: 833,
      overview:
        "This gorgeous 3-bedroom condo features an open living room and dining room with Brazilian cherry wood floors, a custom kitchen with cherry cabinets, granite countertops and high-end stainless-steel appliances, 3 bedrooms with abundant closet space, and 2 marble bathrooms. Building amenities include a doorman, gym, laundry, and roof deck. Great location close to many restaurants, shops, and transportation.",
      key_words: "3BR CONDO ELEVATOR DOORMAN GYM LAUNDRY ROOF DECK",
      views: 0,
      zipcode: 10_065,
      owner_id: 1
    )

  l8 =
    Listing.create(
      price: 4_250,
      bedroom: 0,
      bathroom: 1,
      sqft: 500,
      address: "151 E 83rd St, New York, NY 10028",
      city: "New York",
      state: "NY",
      listing_type: "Rent",
      est_payment: "$425/month",
      building_type: "Apartment",
      built_in: 1926,
      heating: true,
      ac: true,
      garage: false,
      price_sqft: 8,
      overview:
        "Amazing studio apartment in a prime Upper East Side location! This lovely studio features high ceilings, hardwood floors, updated kitchen, and updated bathroom. The building is located in a quiet tree-lined street, and features a live-in superintendent, laundry, and bike storage. Close to many great restaurants, shopping, and transportation.",
      key_words:
        "STUDIO HARDWOOD FLOORS UPDATED KITCHEN UPDATED BATHROOM LAUNDRY",
      views: 0,
      zipcode: 10_028,
      owner_id: 2
    )

  l9 =
    Listing.create(
      price: 3_500,
      bedroom: 1,
      bathroom: 1,
      sqft: 700,
      address: "220 E 71st St, New York, NY 10021",
      city: "New York",
      state: "NY",
      listing_type: "Rent",
      est_payment: "$350/month",
      building_type: "Apartment",
      built_in: 1960,
      heating: true,
      ac: true,
      garage: false,
      price_sqft: 5,
      overview:
        "Beautiful one-bedroom apartment in the heart of the Upper East Side! This spacious apartment features large windows, hardwood floors, and a renovated kitchen. The building is well-maintained and features a doorman and laundry facilities. Conveniently located near transportation, shops, and restaurants.",
      key_words: "1BR HARDWOOD FLOORS RENOVATED KITCHEN DOORMAN LAUNDRY",
      views: 0,
      zipcode: 10_021,
      owner_id: 2
    )

  l10 =
    Listing.create(
      price: 6_500_000,
      bedroom: 3,
      bathroom: 3.5,
      sqft: 2500,
      address: "1280 5th Ave, New York, NY 10029",
      city: "New York",
      state: "NY",
      listing_type: "Sale",
      est_payment: "$13,547/month",
      building_type: "Condo",
      built_in: 2018,
      heating: true,
      ac: true,
      garage: true,
      price_sqft: 2_600,
      overview:
        "Luxury three-bedroom condo with stunning views of Central Park! This beautiful apartment features high ceilings, floor-to-ceiling windows, and a gourmet kitchen. The building offers 24-hour doorman service, a fitness center, and a landscaped roof terrace. Located just steps from Central Park and the Museum Mile.",
      key_words: "3BR CONDO CENTRAL PARK VIEWS DOORMAN FITNESS TERRACE",
      views: 0,
      zipcode: 10_029,
      owner_id: 2
    )

  l11 =
    Listing.create(
      price: 1_900_000,
      bedroom: 2,
      bathroom: 2,
      sqft: 1300,
      address: "114 E 72nd St, New York, NY 10021",
      city: "New York",
      state: "NY",
      listing_type: "Sale",
      est_payment: "$3,949/month",
      building_type: "Co-op",
      built_in: 1948,
      heating: true,
      ac: true,
      garage: false,
      price_sqft: 1_462,
      overview:
        "Stylish two-bedroom co-op in a prime Upper East Side location! This renovated apartment features an open layout, high ceilings, and custom built-ins. The building offers a 24-hour doorman, live-in superintendent, and a common roof deck. Close to transportation, shopping, and dining.",
      key_words: "2BR RENOVATED CO-OP DOORMAN ROOF DECK CUSTOM BUILT-INS",
      views: 0,
      zipcode: 10_021,
      owner_id: 2
    )

  l12 =
    Listing.create(
      price: 2_650_000,
      bedroom: 3,
      bathroom: 2,
      sqft: 1800,
      address: "240 E 76th St, New York, NY 10021",
      city: "New York",
      state: "NY",
      listing_type: "Sale",
      est_payment: "$5,506/month",
      building_type: "Co-op",
      built_in: 1920,
      heating: true,
      ac: true,
      garage: false,
      price_sqft: 1_472,
      overview:
        "Elegant three-bedroom co-op in a classic pre-war building! This spacious apartment features high ceilings, original moldings, and a wood-burning fireplace. The building offers a 24-hour doorman, a live-in superintendent, and a roof garden. Conveniently located near transportation, shops, and restaurants.",
      key_words: "3BR PRE-WAR CO-OP DOORMAN FIREPLACE ROOF GARDEN",
      views: 0,
      zipcode: 10_021,
      owner_id: 1
    )

  l13 =
    Listing.create(
      price: 7_500,
      bedroom: 2,
      bathroom: 2.5,
      sqft: 1500,
      address: "200 E 94th St, New York, NY 10128",
      city: "New York",
      state: "NY",
      listing_type: "Rent",
      est_payment: "$750/month",
      building_type: "Condo",
      built_in: 2001,
      heating: true,
      ac: true,
      garage: true,
      price_sqft: 5,
      overview:
        "Spacious two-bedroom condo with a private balcony and city views! This modern apartment features hardwood floors, stainless steel appliances, and in-unit laundry. The building offers a 24-hour doorman, a fitness center, and a children's playroom. Close to transportation, shops, and restaurants.",
      key_words: "2BR CONDO BALCONY CITY VIEWS DOORMAN FITNESS PLAYROOM",
      views: 0,
      zipcode: 10_128,
      owner_id: 2
    )

  l14 =
    Listing.create(
      price: 4_750_000,
      bedroom: 4,
      bathroom: 3.5,
      sqft: 3000,
      address: "120 E 87th St, New York, NY 10128",
      city: "New York",
      state: "NY",
      listing_type: "Sale",
      est_payment: "$9,872/month",
      building_type: "Co-op",
      built_in: 1929,
      heating: true,
      ac: true,
      garage: false,
      price_sqft: 1_583,
      overview:
        "Stunning four-bedroom co-op with beautiful pre-war details! This grand apartment features a formal dining room, a wood-burning fireplace, and a home office. The building offers a 24-hour doorman, a live-in superintendent, and a roof terrace. Conveniently located near transportation, shops, and restaurants.",
      key_words: "4BR PRE-WAR CO-OP DOORMAN FIREPLACE HOME OFFICE ROOF TERRACE",
      views: 0,
      zipcode: 10_128,
      owner_id: 1
    )

  l15 =
    Listing.create(
      price: 5_995_000,
      bedroom: 5,
      bathroom: 5,
      sqft: 4000,
      address: "40 E 88th St, New York, NY 10128",
      city: "New York",
      state: "NY",
      listing_type: "Sale",
      est_payment: "$12,456/month",
      building_type: "Condo",
      built_in: 2020,
      heating: true,
      ac: true,
      garage: true,
      price_sqft: 1_499,
      overview:
        "Exquisite five-bedroom condo with high-end finishes and top-of-the-line appliances! This stunning apartment features a large terrace, a home office, and a wine cellar. The building offers a 24-hour doorman, a fitness center, and a landscaped roof deck. Located in a prime Upper East Side location close to Central Park, museums, and restaurants.",
      key_words:
        "5BR CONDO TERRACE HOME OFFICE WINE CELLAR DOORMAN FITNESS ROOF DECK",
      views: 0,
      zipcode: 10_128,
      owner_id: 2
    )

  l16 = Listing.create(
      price: 700_000,
      bedroom: 3,
      bathroom: 2,
      sqft: 1500,
      address: "236 E 78th St, New York, NY 10075",
      city: "New York",
      state: "NY",
      zipcode: "10075",
      listing_type: "Sale",
      est_payment: "$3500/month",
      building_type: "Apartment",
      built_in: 1990,
      heating: true,
      ac: true,
      garage: true,
      price_sqft: 467,
      overview:
        "Spacious 4BR 3BA condo with stunning views of Central Park Stylish, Spacious Alcove Studio just steps from Central Park, Fifth Avenue and Carnegie Hall! You can live in the middle of it all!  Priced for an all cash deal!
    This huge alcove studio (approx. 600sf) has been completely gut renovated and cleverly converted into a Junior 2 bedroom apartment.   The gorgeous full separate kitchen features granite counters and flooring, subway tile backsplash, tons of cabinet space... a kitchen that is beautiful to look at and functional for entertaining. The stunning bathroom has marble walls and floors, and lovely mosaic tiled shower, European style pedestal sink and Kohler fixtures.
    This unique apartment has beautiful solid oak parquet floors, plenty of storage and so much more.\n
    The pet-friendly, full service building has a full time doorman, Concierge, valet and an on-site garage where residents receive a 25% discount. We are close to most subway lines as well as the cross-town buses. There is a monthly special assessment of $220.07 through 2/28/23, in addition to the maintenanceSpacious 4BR 3BA condo with stunning views of Central Park Stylish, Spacious Alcove Studio just steps from Central Park, Fifth Avenue and Carnegie Hall! You can live in the middle of it all!  Priced for an all cash deal!
    This huge alcove studio (approx. 600sf) has been completely gut renovated and cleverly converted into a Junior 2 bedroom apartment.   The gorgeous full separate kitchen features granite counters and flooring, subway tile backsplash, tons of cabinet space... a kitchen that is beautiful to look at and functional for entertaining. The stunning bathroom has marble walls and floors, and lovely mosaic tiled shower, European style pedestal sink and Kohler fixtures.
    This unique apartment has beautiful solid oak parquet floors, plenty of storage and so much more.\n
    The pet-friendly, full service building has a full time doorman, Concierge, valet and an on-site garage where residents receive a 25% discount. We are close to most subway lines as well as the cross-town buses. There is a monthly special assessment of $220.07 through 2/28/23, in addition to the maintenance.",
      key_words: "STUDIO ELEVATOR DOORMAN STORAGE ALCOVE BATHROOM",
      views: 0,
      owner_id: 1
    )


  puts "> Attaching Photos..."
  puts " "

  l1.photos.attach(
    [
      {
        io: URI.open("https://villow-seeds.s3.amazonaws.com/house1.webp"),
        filename: "house1.webp"
      },
      {
        io: URI.open("https://villow-seeds.s3.amazonaws.com/house2.webp"),
        filename: "house2.webp"
      },
      {
        io: URI.open("https://villow-seeds.s3.amazonaws.com/house3.webp"),
        filename: "house3.webp"
      },
      {
        io: URI.open("https://villow-seeds.s3.amazonaws.com/4.webp"),
        filename: "house4.webp"
      },
      {
        io: URI.open("https://villow-seeds.s3.amazonaws.com/5.webp"),
        filename: "house5.webp"
      },
      {
        io: URI.open("https://villow-seeds.s3.amazonaws.com/6.webp"),
        filename: "house6.webp"
      },
      {
        io: URI.open("https://villow-seeds.s3.amazonaws.com/7.webp"),
        filename: "house7.webp"
      }
    ]
  )


  puts "> Done!!!"
end
