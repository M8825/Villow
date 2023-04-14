import { stringifySearchWordObj } from "./utils";

// Searching
const RECEIVE_SERCHING_DATA = "localstorage/RECEIVE_SERCHING_DATA";
const RECEIVE_SEARCH_WORD = "localstorage/RECEIVE_SEARCH_WORD";
const RECEIVE_LISTING_TYPE = "localstorage/RECEIVE_LISTING_TYPE";



const receiveSearchData = (payload) => ({
	type: RECEIVE_SERCHING_DATA,
	payload,
});

const setSearchWord = (payload) => ({
	type: RECEIVE_SEARCH_WORD,
	payload,
});

const receiveListingType = (payload) => ({
  type: RECEIVE_LISTING_TYPE,
  payload,
});

export const getSearchWord = () => (state) => {
	if (state && state.searchFilter) {
		return state.searchFilter.searchWord;
	}

	return null;
};

export const setHomeListingType = (listingType) => (dispatch) => {
  localStorage.setItem("listingType", listingType);
};

export const setSearchWordToLocalStorage =
	(citySuffix, cleanSuggestion, term) => (dispatch) => {
		const searchWordObj = stringifySearchWordObj(
			citySuffix,
			cleanSuggestion,
			term
		);

		localStorage.setItem("searchWord", searchWordObj);
		debugger;

		dispatch(setSearchWord({ citySuffix, cleanSuggestion, term }));
	};

export const setInitialSearchingData = (localStorageData) => (dispatch) => {
	if (localStorageData) {
		dispatch(receiveSearchData(localStorageData));
	}
};

export const setListingType = (listingType) => (dispatch) => {

  localStorage.setItem("listingType", listingType);

  dispatch(receiveListingType(listingType));

};

const searchFiltersReducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_SERCHING_DATA:
			return { ...state, ...action.payload };
		case RECEIVE_SEARCH_WORD:
			const searchWord =
				action.payload.term === "city"
					? action.payload.cleanSuggestion +
					  ", " +
					  action.payload.citySuffix
					: action.payload.cleanSuggestion;

			debugger;
			return {
				...state,
				searchWord,
				term: action.payload.term,
			};
    case RECEIVE_LISTING_TYPE:
      return {...state, listingType: action.payload}
		default:
			return state;
	}
};

export default searchFiltersReducer;
