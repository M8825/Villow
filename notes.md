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
    [ ] - Add unidentified search options. Just provide whole addresses -
          basically when user starts typing complete address starting with
          street address - NOTE(mlkz): Is it really necessary? For sure not
          for now
    [X] - route for search with state
    [X] - Add dropdown to search bar for suggestions
    [X] - style default dropdown
    [X] - complete styling of dropdown
        [X] - styling for search results - include onClick listener
    [X] - search identified by city
        [X] - identify city pattern
        [X] - Fetch relevant suggestions from database if there are any
        [X] - test for other cities
    [X] - Identify zip code
        [X] - Create a utilFuntion that checks for zip code input
        [X] - Qury database for availabe listing zip codes
        [X] - Retun suggestions
        [X] - Make sure it's highlighted properly
    [X] - Fetch lisitings based on search input - Important note is that
          it should make specific query to database based on the search term
        [X] - Fetch based on state
        [X] - Fetch based on city
        [X] - Fetch based on zipcode
    [X] - Add onClick event listener to search button - Grabs all listings
[-] - Index Page
    [-] - Create custom search bar for index page. Only implemnet Input
          element. Filters should go in separate component.
    [ ] - Add filters - Check them on zillow




# TODOs


## Fix
[ ] - Listing index doesn't work i user is not signed in.
[ ] - If user is not signed in, search suggestion click breaks index page
[ ] - NOT IMPORTANT :: For splash search, when you make initial requst to the database for
      suggestions, after your receive suggestions from DB, on every additional
      onChange BEFORE you make new request to the database, check if search
      input substring matches any record in redux state first. If there are
      no matching state suggestions, THAN make new request to DB.
[ ] - Unutorithed users shouldn't be able to land listing createion page

### Price range
[-] - When the user clicks on minimum price range option button, the dropdown
      menu closes automatically. It should only close automatically when the
      user clicks on the maximum price range option.

# NOTE:
- Last workin commit - Ref: fetch on praice range option selection - to fetch
    - on branch price-range

# Git commits for today.

- Git log --since=midnight --until=now --oneline

## Important abbreviations

fix: A bug has been fixed
docs: Changes have been made to documentation
style: Changes have been made to code formatting, but not to functionality
refactor: Changes have been made to code that does not affect functionality
test: Changes have been made to test cases
chore: Changes have been made to build processes or tools
perf: A performance improvement has been made
ci: Changes have been made to the Continuous Integration (CI) pipeline
build: Changes have been made to the build process
revert: A previous commit has been revertedt log --since=midnight --until=now --oneline

