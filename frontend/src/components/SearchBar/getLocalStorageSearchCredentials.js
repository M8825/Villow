export function getLocalStorageSearchCredentials() {
  const localStorageObj = JSON.parse(localStorage.getItem("searchWord"));
  let listingType = localStorage.getItem("listingType");

  let localStorageSearchWord;
  let localStorageTerm;

  // Check if there is localStorage for an User
  if (localStorageObj && listingType) {
    localStorageSearchWord = Object.values(localStorageObj)[0];

    // If there is a city suffix, add it to the search word
    // It should be a State like - NY, CA, FL, etc.
    if (localStorageObj.citySuffix) {
      localStorageSearchWord += `,${localStorageObj.citySuffix}`;
    }

    localStorageTerm = localStorageObj.term;
  } else {
    // If there is no localStorage for an User, set default values
    localStorageSearchWord = "New York, NY";
    localStorageTerm = "city";
    listingType = "Sale";
  }

  return { localStorageTerm, localStorageSearchWord, listingType };
}
