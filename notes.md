## Migration
### Listing
    - NOTE: I'm setting boolean for conto, garage, and ac. On creation WITHOUT `null: false`;

### Cards
    - Change layout of cards on window resize


## backend
### listing
    [X] - add default value to listing tables on view
    [X] - delete listing by. This information should be provided by joins table between
            listing and user
    [ ] - priceSqft should be calculate in front end

#### Adding a listing
    [X] - write thunk and pojo actions to receiveListing
    [X] - update reducer
    [X] - Create listing object and try to add it in console like you did for User
    [ ] - Write a basic form without styling and and create listing



const listing = {
	price: 523400,
	bedroom: 3,
	bathroom: 2,
	sqft: 2000,
	address: "214East 82 Street, New York, NY 10028",
    city: "New York",
    state: "NY",
    zipcode: 10075,
	listing_type: "Sale",
	est_payment: "$3500/month",
	building_type: "Apartment",
	built_in: 1990,
	heating: true,
	ac: true,
	garage: true,
	price_sqft: 467,
	overview: `Spacious 4BR 3BA condo with stunning views of Central Park Stylish, Spacious Alcove Studio just steps from Central Park, Fifth Avenue and Carnegie Hall! You can live in the middle of it all!  Priced for an all cash deal!
    This huge alcove studio (approx. 600sf) has been completely gut renovated and cleverly converted into a Junior 2 bedroom apartment.   The gorgeous full separate kitchen features granite counters and flooring, subway tile backsplash, tons of cabinet space... a kitchen that is beautiful to look at and functional for entertaining. The stunning bathroom has marble walls and floors, and lovely mosaic tiled shower, European style pedestal sink and Kohler fixtures.
    This unique apartment has beautiful solid oak parquet floors, plenty of storage and so much more.\n
    The pet-friendly, full service building has a full time doorman, Concierge, valet and an on-site garage where residents receive a 25% discount. We are close to most subway lines as well as the cross-town buses. There is a monthly special assessment of $220.07 through 2/28/23, in addition to the maintenanceSpacious 4BR 3BA condo with stunning views of Central Park Stylish, Spacious Alcove Studio just steps from Central Park, Fifth Avenue and Carnegie Hall! You can live in the middle of it all!  Priced for an all cash deal!
    This huge alcove studio (approx. 600sf) has been completely gut renovated and cleverly converted into a Junior 2 bedroom apartment.   The gorgeous full separate kitchen features granite counters and flooring, subway tile backsplash, tons of cabinet space... a kitchen that is beautiful to look at and functional for entertaining. The stunning bathroom has marble walls and floors, and lovely mosaic tiled shower, European style pedestal sink and Kohler fixtures.
    This unique apartment has beautiful solid oak parquet floors, plenty of storage and so much more.\n
    The pet-friendly, full service building has a full time doorman, Concierge, valet and an on-site garage where residents receive a 25% discount. We are close to most subway lines as well as the cross-town buses. There is a monthly special assessment of $220.07 through 2/28/23, in addition to the maintenance.`,
    key_words: "STUDIO ELEVATOR DOORMAN STORAGE ALCOVE BATHROOM",
	views: 0,
	owner_id: 1,
};
