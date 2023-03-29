import { csrfFetch } from "./csrf";

const RECEIVE_LISTINGS = "api/listings/RECEIVE_LISTINGS";
const RECEIVE_LISTING = "api/listings/RECEIVE_LISTING";
const REMOVE_LISTINGS = "api/listings/REMOVE_LISTINGS";
const RECEIVE_FAVORITES = "api/listings/RECEIVE_FAVORITES";

// TODO: add remove and update listing

export const receiveListings = (listings) => ({
	type: RECEIVE_LISTINGS,
	listings,
});

export const receiveListing = (listing) => ({
	type: RECEIVE_LISTING,
	listing,
});

export const receiveFavorites = (favorites) => ({
	type: RECEIVE_FAVORITES,
	favorites,
});

export const removeListings = (listingIds) => ({
	type: REMOVE_LISTINGS,
	listingIds,
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
	const res = await csrfFetch(`/api/users/${userId}/favorites/${listingId}`, {
		method: "DELETE",
		body: JSON.stringify({ listing: { listing_id: listingId } }),
	});

	if (res.ok) {
		const listing = await res.json();
		dispatch(receiveListing(listing));
	}
};

export const fetchListingsByState = (term, cityState) => async (dispatch) => {
	const res = await csrfFetch(
		`/api/search?term=${term}&search_phrase=${cityState}&search_filter=listings`
	);

	debugger;
	if (res.ok) {
		debugger;
		const listings = await res.json();
		debugger;
		dispatch(receiveListings(listings));
	}
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
			action.listingIds.forEach(
				(listingId) => delete newState[listingId]
			);
			return newState;
		default:
			return state;
	}
};

export default listingsReducer;
