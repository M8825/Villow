export function getLocalStorageSearchCredentials(term) {
  const localStorageObj = JSON.parse(localStorage.getItem("searchWord"));
  const listingType = localStorage.getItem("listingType");

  let localStorageSearchWord = Object.values(localStorageObj)[0];

  if (localStorageObj.citySuffix) {
    localStorageSearchWord += `,${localStorageObj.citySuffix}`;
  }

  const localStorageTerm = localStorageObj.term;

  return { localStorageTerm, localStorageSearchWord, listingType };
}
