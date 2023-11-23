import { csrfFetch } from "./csrf";
import { objectToQuerySting } from "./utils";
import { cleanLocalStorageSearchCredentials } from "./utils";
import { createSelector } from "reselect";


const listingSelector = state => state.listings


const RECEIVE_LISTINGS = "api/listings/RECEIVE_LISTINGS";
const RECEIVE_LISTING = "api/listings/RECEIVE_LISTING";
const REMOVE_LISTINGS = "api/listings/REMOVE_LISTINGS";
const RECEIVE_FAVORITES = "api/listings/RECEIVE_FAVORITES";
const REMOVE_FAVORITES = "api/listings/REMOVE_FAVORITES";
const CLEAR_LISTINGS = "api/listings/CLEAR_LISTINGS";


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

const removeFavorites = (listingId) => ({
  type: REMOVE_FAVORITES,
  listingId,
});

const clearListings = () => ({
  type: CLEAR_LISTINGS,
});

const removeListings = (listingIds) => ({
  type: REMOVE_LISTINGS,
  listingIds,
});

export const getListings = createSelector([listingSelector], listings => {
  if (listings) {
    return Object.values(listings);
  }

  return [];
});

export const getListing = (id) => (state) => {
  if (state && state.listings) {
    return state.listings[id];
  }

  return null;
};

export const getFavorites = createSelector([listingSelector], listings => {
  if (listings) {
    return Object.values(listings).filter(listing => listing.favorite);
  }

  return [];
});

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
    dispatch(removeListings(listingIds));
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
  const res = await csrfFetch(`/api/users/listings${userId}/favorites/${listingId}`, {
    method: "DELETE",
    body: JSON.stringify({ listing: { listing_id: listingId } }),
  });

  if (res.ok) {
    dispatch(removeFavorites(listingId));
  }
};

export const fetchSearchListings =
  (extraParams = {}) =>
  async (dispatch) => {

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
      return {...newState, ...action.listings };
    case RECEIVE_LISTING:
      newState[action.listing.id] = action.listing;
      return newState;
    case RECEIVE_FAVORITES:
      return {...newState,  ...action.favorites };
    case REMOVE_FAVORITES:
      newState[action.listingId]['favorite'] = false;
      return newState;
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
