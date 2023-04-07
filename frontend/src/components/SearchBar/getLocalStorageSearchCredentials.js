export function getLocalStorageSearchCredentials(term) {
  const localStorageObj= JSON.parse(localStorage.getItem("searchWord"));

  let localStorageSearchWord = Object.values(localStorageObj)[0];

  if (localStorageObj.citySuffix) {
    localStorageSearchWord += `,${localStorageObj.citySuffix}`;
  }

  const localStorageTerm = localStorageObj.term;

  return { localStorageTerm, localStorageSearchWord };
}
