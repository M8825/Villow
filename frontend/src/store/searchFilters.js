import { stringifySearchWordObj } from "./utils";

// Searching
const RECEIVE_SERCHING_DATA = "localstorage/RECEIVE_SERCHING_DATA";
const SET_SEARCH_WORD = "localstorage/SET_SEARCH_WORD";

const receiveSearchData = (payload) => ({
	type: RECEIVE_SERCHING_DATA,
	payload,
});

const setSearchWord = (payload) => ({
	type: SET_SEARCH_WORD,
	payload,
});

export const getSearchWord = () => (state) => {
	if (state && state.searchFilter) {
		return state.searchFilter.searchWord;
	}

	return null;
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

const searchFiltersReducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_SERCHING_DATA:
			return { ...state, ...action.payload };
		case SET_SEARCH_WORD:
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
		default:
			return state;
	}
};

export default searchFiltersReducer;
