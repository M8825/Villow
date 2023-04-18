// Build dynamic query string
export const objectToQuerySting = (obj) => {
  return Object.keys(obj)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
    .join("&");
};

export const stringifySearchWordObj = (citySuffix, cleanSuggestion, term) => {
  const searchWordObj = JSON.stringify({
    [term]: cleanSuggestion,
    citySuffix: citySuffix,
    term: term,
  });
  return searchWordObj;
};

export const getLocalStorageSearchCredentials = () => {
  const searchWord = localStorage.getItem("searchWord");
  const term = localStorage.getItem("term");
  const citySuffix = localStorage.getItem("citySuffix");
  let listingType = localStorage.getItem("listingType");
  const minPrice = localStorage.getItem("minPrice");
  const maxPrice = localStorage.getItem("maxPrice");

  // Check if there is localStorage items
  if (term && searchWord && listingType && citySuffix) {
    return { term, searchWord, listingType, minPrice, maxPrice, citySuffix };
  } else {
    // If there is no localStois there a way to arage for an User, set default values
    localStorage.setItem("searchWord", "New York");
    localStorage.setItem("term", "city");
    localStorage.setItem("citySuffix", "NY");
    localStorage.setItem("listingType", "Sale");
    localStorage.setItem("minPrice", "");
    localStorage.setItem("maxPrice", "");

    // Recursively set default credentials for seach functinality
    return getLocalStorageSearchCredentials();
  }
};

// Grab search filters from localstorage and
export const cleanLocalStorageSearchCredentials = () => {
  let { term, searchWord, listingType, minPrice, maxPrice, citySuffix } =
    getLocalStorageSearchCredentials();

  const encodedSeachValue = encodeURIComponent(searchWord);

  let queryObject = {
    expected_response: "listings", // Flag for back-end. Rails may rqueryStringeceive suggestions flag
    [term]: encodedSeachValue,
    term,
    citySuffix,
    listing_type: listingType,
    min_price: minPrice,
    max_price: maxPrice,
  };

  delete queryObject["undefined"];

  return queryObject;
};
