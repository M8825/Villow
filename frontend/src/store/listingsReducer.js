import { csrfFetch } from "./csrf";
import { objectToQuerySting } from "./utils";
import { cleanLocalStorageSearchCredentials } from "./utils";

const RECEIVE_LISTINGS = "api/listings/RECEIVE_LISTINGS";
const RECEIVE_LISTING = "api/listings/RECEIVE_LISTING";
const REMOVE_LISTINGS = "api/listings/REMOVE_LISTINGS";
const RECEIVE_FAVORITES = "api/listings/RECEIVE_FAVORITES";
const CLEAR_LISTINGS = "api/listings/CLEAR_LISTINGS";


// TODO: add remove and update listing

const receiveListings = (listings) => ({
  type: RECEIVE_LISTINGS,
  listings,
});

const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  listing,
});

const receiveFavorites = (favorites) => ({
  type: RECEIVE_FAVORITES,
  favorites,
});

const clearListings = () => ({
  type: CLEAR_LISTINGS,
});

export const getListings = (state) => {
  if (state && state.listings) {
    return Object.values(state.listings);
  }

  return [];
};

export const getListing = (id) => (state) => {
  if (state && state.listings) {
    return state.listings[id];
  }

  return null;
};


export const fetchListings = () => async (dispatch) => {
  const res = await csrfFetch("/api/listings");

  if (res.ok) {
    const listings = await res.json();
    dispatch(receiveListings(listings));
  }
};

export const fetchListing = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/listings/${id}`);

  if (res.ok) {
    const listing = await res.json();
    dispatch(receiveListing(listing));
  }
};

export const fetchListingByUserId = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${userId}/listings`);

  if (res.ok) {
    const listings = await res.json();
    dispatch(receiveListings(listings));
  }
};

export const createListing = (listing) => async (dispatch) => {
  const res = await csrfFetch("/api/listings", {
    method: "POST",
    body: listing,
  });

  if (res.ok) {
    const newListing = await res.json();
    dispatch(receiveListing(newListing));
  }
};

export const updateListing = (listing, listingId) => async (dispatch) => {
  const res = await csrfFetch(`/api/listings/${listingId}`, {
    method: "PUT",
    body: listing,
  });

  if (res.ok) {
    const updatedListing = await res.json();
    dispatch(receiveListing(updatedListing));
  }
};

export const deleteListing = (listingIds) => async (dispatch) => {
  const res = await csrfFetch(`/api/listings/${1}`, {
    method: "DELETE",
    body: JSON.stringify({ listing: { listing_ids: listingIds } }),
  });

  if (res.ok) {
    dispatch(listingIds);
  }
};

export const fetchUserFavorites = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${userId}/favorites`);

  if (res.ok) {
    const favorites = await res.json();
    dispatch(receiveFavorites(favorites));
  }
};

export const addFavorite = (userId, listingId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${userId}/favorites`, {
    method: "POST",
    body: JSON.stringify({ listing: { listing_id: listingId } }),
  });

  if (res.ok) {
    const favorite = await res.json();
    dispatch(receiveListing(favorite));
  }
};

export const removeFavorite = (userId, listingId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${userId}/favorites/${listingId}`, {
    method: "DELETE",
    body: JSON.stringify({ listing: { listing_id: listingId } }),
  });

  if (res.ok) {
    const listing = await res.json();
    dispatch(receiveListing(listing));
  }
};

export const fetchSearchListings =
  (term, searchInputValueStr, extraParams = {}) =>
  async (dispatch) => {
    // Make sure to encode for URL safe character like #
    // prevent params from being cut off
    //

    const baseParams = cleanLocalStorageSearchCredentials();

    const queryParams = { ...baseParams, ...extraParams };

    const queryString = objectToQuerySting(queryParams);

    const res = await csrfFetch(`/api/search?${queryString}`);

    if (res.ok) {
      const listings = await res.json();

      dispatch(receiveListings(listings));
    }
  };

export const clearAllListings = () => async (dispatch) => {
  dispatch(clearListings());
};

const listingsReducer = (state = {}, action) => {
  const newState = { ...state };

  switch (action.type) {
    case RECEIVE_LISTINGS:
      return { ...action.listings };
    case RECEIVE_LISTING:
      newState[action.listing.id] = action.listing;
      return newState;
    case RECEIVE_FAVORITES:
      return { ...action.favorites };
    case REMOVE_LISTINGS:
      action.listingIds.forEach((listingId) => delete newState[listingId]);
      return newState;
    case CLEAR_LISTINGS:
      return {};
    default:
      return state;
  }
};

export default listingsReducer;
