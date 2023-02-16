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
    [X] - priceSqft should be calculate in front end

#### Adding a listing
    [X] - write thunk and pojo actions to receiveListing
    [X] - update reducer
    [X] - Create listing object and try to add it in console like you did for User
    [X] - Write a basic form without styling and and create listing
        - [X] - round est_payment number to two decimal
        - [X] - Fix boolean inputs eg. garage, ac, conto
    - OPEN TODOs:
        - [ ] errors inf
        - [ ] Rent sell inf
        - [ ] Photos to upload inf

#### Updating a listing
    - [ ] - properly render inputs on update
    - [ ] - Test on proper update




