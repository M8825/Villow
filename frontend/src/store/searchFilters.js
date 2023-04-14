// Searching
const RECEIVE_SERCHING_DATA = "localstorage/RECEIVE_SERCHING_DATA";

const receiveSearchData = (payload) => ({
  type: RECEIVE_SERCHING_DATA,
  payload,
});


export const getSearchWord = () => (state) => {
  debugger
  if (state && state.searchFilter) {
    return  state.searchFilter.searchWord
  }

  return  null
}

export const setInitialSearchingData = (localStorageData) => (dispatch) => {
  if (localStorageData) {
    dispatch(receiveSearchData(localStorageData));
  }
};

const searchFiltersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SERCHING_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default searchFiltersReducer;
