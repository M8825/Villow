// Build dynamic query string
export const objectToQuerySting = (obj) => {
  return Object.keys(obj)
    .map((key) => {
      const value = obj[key];

      return encodeURIComponent(key) + "=" + encodeURIComponent(value);
    })
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
  let listingType = localStorage.getItem("listingType");
  const minPrice = localStorage.getItem("minPrice");
  const maxPrice = localStorage.getItem("maxPrice");
  const bedroom = localStorage.getItem("bedroom");
  const bathroom = localStorage.getItem("bathroom");

  // Check if there is localStorage items
  if (term && searchWord && listingType) {
    return {
      term,
      searchWord,
      listingType,
      minPrice,
      maxPrice,
      bedroom,
      bathroom,
    };
  } else {
    // If there is no localStois there a way to arage for an User, set default values
    localStorage.setItem("searchWord", "New York, NY");
    localStorage.setItem("term", "city");
    localStorage.setItem("listingType", "Sale");
    localStorage.setItem("minPrice", "");
    localStorage.setItem("maxPrice", "");
    localStorage.setItem("bedroom", "");

    // Recursively set default credentials for seach functinality
    return getLocalStorageSearchCredentials();
  }
};

// Grab search filters from localstorage and
export const cleanLocalStorageSearchCredentials = () => {
  let { term, searchWord, listingType, minPrice, maxPrice, bedroom, bathroom} =
    getLocalStorageSearchCredentials();

  const parsedSearchWord =
    term === "city" ? searchWord.split(",")[0] : searchWord;

  const encodedSeachValue = encodeURIComponent(parsedSearchWord);

  let queryObject = {
    expected_response: "listings", // Flag for back-end. Rails may rqueryStringeceive suggestions flag
    [term]: encodedSeachValue,
    term,
    listing_type: listingType,
    min_price: minPrice,
    max_price: maxPrice,
    bedroom,
    bathroom
  };

  delete queryObject["undefined"];

  return queryObject;
};
