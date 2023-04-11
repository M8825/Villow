import { majorCities } from "./majorCities";

// checks if the suggestions matches the value and return
// the indices of the matching characters
export const findMatchingIndices = (suggestions, value) => {
  if (!value) return [];

  suggestions = suggestions.toLowerCase();
  value = value.toLowerCase();

  let start, end;

  for (let i = 0; i < suggestions.length; i++) {
    let suggestionIdx = i;

    if (suggestions[i] === value[0]) {
      for (let j = 0; j < value.length; j++) {
        if (suggestions[suggestionIdx] === value[j]) {
          // If start is already set, next matching index will be assigned to end
          if (!start && start !== 0) {
            start = suggestionIdx;
          } else {
            end = suggestionIdx;
          }

          suggestionIdx++;
        } else {
          start = null;
          end = null;
          break;
        }
      }
    }

    if (end) break;
  }

  return [start, end];
};

export const citiesMatch = (searchString) => {
  if (!searchString) return []; // return empty array if no search string

  let matchingCities = [];

  Object.values(majorCities.cities).forEach((cityObj) => {
    const cityName = cityObj.name.toLowerCase();
    const citySearchingValue = searchString.toLowerCase();

    if (
      cityName.includes(citySearchingValue) ||
      citySearchingValue.includes(cityName)
    ) {
      matchingCities.push(cityObj.name);
    }
  });


  return matchingCities;
};

export const statesMatch = (searchString) => {
  const states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  if (states.includes(searchString.toUpperCase())) {
    return searchString.toUpperCase();
  }

  return false;
};

const isDigit = (str) => {
  return /^\d$/.test(str);
};

// Iterate through seach input and check if all characters are digits
export const digitsMatcher = (searchString) => {
  for (let i = 0; i < searchString.length; i++) {
    if (!isDigit(searchString[i])) return false;
  }

  return true;
};
