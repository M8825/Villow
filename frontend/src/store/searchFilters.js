const RECEIVE_SERCHING_DATA = "localstorage/RECEIVE_SERCHING_DATA";
const RECEIVE_SEARCH_WORD = "localstorage/RECEIVE_SEARCH_WORD";
const RECEIVE_LISTING_TYPE = "localstorage/RECEIVE_LISTING_TYPE";
const RECEIVE_BEDROOMS = "localstorage/RECEIVE_BEDROOMS";

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

const receiveBedrooms = (payload) => ({
  type: RECEIVE_BEDROOMS,
  payload,
})

export const getSearchWord = () => (state) => {
  if (state && state.searchFilter) {
    return state.searchFilter.searchWord;
  }

  return null;
};

export const getFilter = () => (state) => {
  if (state && state.searchFilter) {
    return state.searchFilter
  }

  return null
}


export const getPrice = (priceLabel) => (state) => {
  if (state && state.searchFilter) {
    priceLabel = priceLabel === "No Min" ? "minPrice" : "maxPrice";

    return state.searchFilter[priceLabel];
  }

  return null;
};

export const setSearchWordToLocalStorage =
  (citySuffix, searchWord, term) => (dispatch) => {
    localStorage.setItem("searchWord", searchWord);
    localStorage.setItem("term", term);

    dispatch(setSearchWord({ citySuffix, searchWord, term }));
  };


export const setListingType = (listingType) => (dispatch) => {
  localStorage.setItem("listingType", listingType);

  dispatch(receiveListingType(listingType));
};

export const setBedrooms = (bedrooms) => (dispatch) => {
  localStorage.setItem("bedrooms", bedrooms);

  dispatch(receiveBedrooms(bedrooms));
}

function getPriceLabel(priceLabel) {
  return (priceLabel = priceLabel === "No Min" ? "minPrice" : "maxPrice");
}

export const setPrice = (priceLabel, price) => (dispatch) => {
  const label = getPriceLabel(priceLabel);

  localStorage.setItem(`${label}`, price);
  dispatch(receiveSearchData({ [label]: price }));
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
    case RECEIVE_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload.searchWord,
        term: action.payload.term,
      };
    case RECEIVE_LISTING_TYPE:
      return { ...state, listingType: action.payload };
    case RECEIVE_BEDROOMS:
      return { ...state, bedrooms: action.payload };
    default:
      return state;
  }
};

export default searchFiltersReducer;
