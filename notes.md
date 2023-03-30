## Migration
### Listing
    - NOTE: I'm setting boolean for conto, garage, and ac. On creation WITHOUT `null: false`;

### Cards - TODO!
    [ ] - Change layout of cards on window resize


## backend
### listing
    [X] - add default value to listing tables on view
    [X] - delete listing by. This information should be provided by joins table between
            listing and user
    [X] - priceSqft should be calculate in front end

#### Adding a listing
    [X] - write thunk and pojo actions to receiveListing
    [X] - update reducer
    [X] - Create listing object and try to add it in console like you did for User
    [X] - Write a basic form without styling and and create listing
        - [X] - round est_payment number to two decimal
        - [X] - Fix boolean inputs eg. garage, ac, conto
    - OPEN TODOs:
        - [X] errors inf
        - [X] Rent sell inf
        - [X] Photos to upload inf

## Libraries
    - https://googlemaps.github.io/react-wrapper/index.html - Handle google maps loading with this library

## Favorites
    [X] - Backend
        [X] - Create Joins table with references to user_id and listing_id
        [X] - Create associations
            + [X] - User has many favorites
            + [X] - User has many favorited_listings through favorites
            + [X] - Listing has many favorites
            + [X] - Favorite belongs to user
            + [X] - Favorite belongs to listing
        [x] - Create /api/users/:user_id/favorites route
        [x] - Create controller and render index jbuilder
        [ ] - Implement create and destroy actions

    [+] - Frontend - TODO:
        [X] - Favorites index and update state
        [X] - Implement Favorites component and use ProfileCard to render favorites
        [x] - Add onClick create favorites
        [X] - Add onClick destroy favorites

## Search
[-] - Splash page
    [X] - route for search with state
    [X] - Add dropdown to search bar for suggestions
    [-] - complete styling of dropdown
        [-] - styling for search results - include onClick listener
        [-] - style default dropdown
    [ ] - search identified by city
    [ ] - Add identified search based on zip code
    [ ] - Add unidentified search options. Just provide whole addresses - basically when user starts typing complete address starting with street address



# TODOs


## Fix
[ ] - If user is not signed in, search suggestion click breaks index page 

## Can't delete listing properly in user profile





















