export function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

export function cleanUpWord(searchWord, term) {
  let cleanSearchWord = searchWord;

  // Split in if condition to avoid error when searchWord is empty
  // or when searchWord is a street address
  if (term === "city") {
    cleanSearchWord = searchWord.split(",")[0]; // Grab City from "city, state"
  }
  return cleanSearchWord;
}
