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
  const excludes = localStorage.getItem("excludes");
  const searchHistory = localStorage.getItem("searchHistory");

  // Check if there is localStorage items
  if (term && searchWord && listingType && searchHistory) {
    return {
      term,
      searchWord,
      listingType,
      ...(minPrice && { minPrice }),
      ...(maxPrice && { maxPrice }),
      ...(bedroom && { bedroom }),
      ...(bathroom && { bathroom }),
      ...(excludes && { excludes: JSON.parse(excludes) }),
      searchHistory: JSON.parse(searchHistory),
    };
  } else {
    // If there is no localStois there a way to arage for an User, set default values
    localStorage.setItem("searchWord", "New York, NY");
    localStorage.setItem("term", "city");
    localStorage.setItem("listingType", "Sale");
    // localStorage.setItem("minPrice", "");
    // localStorage.setItem("maxPrice", "");
    // localStorage.setItem("bedroom", "0");
    // localStorage.setItem("bathroom", "0");
    localStorage.setItem("searchHistory", JSON.stringify([]));

    // Recursively set default credentials for seach functinality
    return getLocalStorageSearchCredentials();
  }
};

// Grab search filters from localstorage and
export const cleanLocalStorageSearchCredentials = () => {
  let {
    term,
    searchWord,
    listingType,
    minPrice,
    maxPrice,
    bedroom,
    bathroom,
    excludes,
    searchHistory,
  } = getLocalStorageSearchCredentials();

  const parsedSearchWord =
    term === "city" ? searchWord.split(",")[0] : searchWord;

  const encodedSearchValue = encodeURIComponent(parsedSearchWord);

  // TODO: use camel key to snake key in rails and delete this function
  let queryObject = {
    expected_response: "listings", // Flag for back-end. Rails may rqueryStringeceive suggestions flag
    [term]: encodedSearchValue,
    term,
    ...(listingType && { listing_type: listingType }),
    ...(minPrice && { min_price: minPrice }),
    ...(maxPrice && { max_price: maxPrice }),
    ...(bedroom && { bedroom }),
    ...(bathroom && { bathroom }),
    ...(excludes && excludes.length !== 0 && { excludes }),
    searchHistory, // TODO: I think I don't need this key in the query string
  };

  delete queryObject["undefined"];

  return queryObject;
};
