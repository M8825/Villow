import { csrfFetch } from "./csrf";
import { objectToQuerySting } from "./utils";

const RECEIVE_SUGGESTIONS = "api/search/RECEIVE_SUGGESTIONS";
const CLEAN_SUGGESTIONS = "CLEAN_SUGGESTIONS";





export const getSuggestions = () => (state) => {
  if (state && state.search) {
    return Object.values(state.search);
  }

  return null;
};


const receiveSuggestions = (suggestions) => ({
  type: RECEIVE_SUGGESTIONS,
  suggestions,
});

const cleanSuggestions = () => ({
  type: CLEAN_SUGGESTIONS,
});



export const searchSuggestions =
  (searchString, term = null) =>
  async (dispatch) => {
    let res;

    const baseParams = {
      term: term,
      [term]: searchString,
    };

    const queryString = objectToQuerySting(baseParams);

    if (term) {
      res = await csrfFetch(
        `/api/search?${queryString}`
      );
    } else { // TODO(mlkz): I think I have to get rid of it. this case never hits
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
