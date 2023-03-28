import { csrfFetch } from "./csrf";

const RECEIVE_SUGGESTIONS = "api/search/RECEIVE_SUGGESTIONS";
const CLEAN_SUGGESTIONS = "CLEAN_SUGGESTIONS";


export const getSuggestions = () => (state) => {
    if (state && state.search) {
        return Object.values(state.search)
    }


    return null;
}


const receiveSuggestions = (suggestions) => ({
    type: RECEIVE_SUGGESTIONS,
    suggestions
});


const cleanSuggestions = () => ({
    type: CLEAN_SUGGESTIONS
})

export const searchSuggestions =
	(searchString, term = null) =>
	async (dispatch) => {
		// listings?search_term=10028
		let res;
		if (term) {
			res = await csrfFetch(
				`/api/search?term=${term}&search_phrase=${searchString}`
			);
		} else {
			res = await csrfFetch(
				`/api/listings?search_string${searchString}?search_term=${term}`
			);
		}

		if (res.ok) {
			const suggestions = await res.json();
			dispatch(receiveSuggestions(suggestions))
		}
	};



export const cleanSearchSuggestions = () => async (dispatch) => {
    dispatch(cleanSuggestions());
};

const searchSuggestionsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_SUGGESTIONS:
            return {...state, ...action.suggestions};
        case CLEAN_SUGGESTIONS:
            return {};
        default:
            return state;
    }
}

export default searchSuggestionsReducer;
