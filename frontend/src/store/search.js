import { csrfFetch } from "./csrf";
import {
	cleanLocalStorageSearchCredentials,
	objectToQuerySting,
} from "./utils";
import { createSelector } from "reselect";

const RECEIVE_SUGGESTIONS = "api/search/RECEIVE_SUGGESTIONS";
const CLEAN_SUGGESTIONS = "CLEAN_SUGGESTIONS";

const searchSelector = (state) => state?.search;

export const getSuggestions = createSelector([searchSelector], search => {
	if (search) {
		return Object.values(search);
	}

	return null;
});

const receiveSuggestions = (suggestions) => ({
	type: RECEIVE_SUGGESTIONS,
	suggestions,
});

const cleanSuggestions = () => ({
	type: CLEAN_SUGGESTIONS,
});

export const searchSuggestions =
	(searchString, term = null, location) =>
	async (dispatch) => {
		let res;

		const baseParams = {
			expected_response: "suggestions",
			term: term,
			[term]: searchString,
		};

		const localStorageParams = cleanLocalStorageSearchCredentials();

		const queryString = objectToQuerySting({
			...(location !== "splash" && { localStorageParams }), // if location is from splash page
			...baseParams, // don't send parameters from local Storage
		});

		if (term) {
			res = await csrfFetch(`/api/search?${queryString}`);
		} else {
			// TODO(mlkz): I think I have to get rid of it. this case never hits
			res = await csrfFetch(
				`/api/listings?search_string${searchString}?search_term=${term}`
			);
		}

		if (res.ok) {
			const suggestions = await res.json();
			dispatch(receiveSuggestions(suggestions));
		}
	};

export const cleanSearchSuggestions = () => async (dispatch) => {
	dispatch(cleanSuggestions());
};

const searchSuggestionsReducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_SUGGESTIONS:
			return { ...action.suggestions };
		case CLEAN_SUGGESTIONS:
			return {};
		default:
			return state;
	}
};

export default searchSuggestionsReducer;
