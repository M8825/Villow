import { majorCities } from "./majorCities";

// checks if the suggestion matches the value and return 
// the indices of the matching characters
export const findMatchingIndices = (suggestion, value) => {
    let matchingPart = [];
    for (let i = 0; i < suggestion.length; i++) {
        let suggestionIdx = i;

        if (suggestion[i] && value[0]
            && suggestion[i].toLowerCase() === value[0].toLowerCase()) {

            for (let j = 0; j < value.length; j++) {
                if (suggestion[i] && value[j] !== " "
                    && suggestion[suggestionIdx].toLowerCase() === value[j].toLowerCase()) {

                    matchingPart.push(suggestionIdx);
                    suggestionIdx++;
                } else {
                    matchingPart = [];
                    break;
                }

            };

        };

        if (matchingPart.length > 0) {
            break;
        };
    };

    return matchingPart;
};


export const citiesMatch = (searchString) => {
    if (!searchString) return []; // return empty array if no search string

    let matchingCities = [];

    Object.values(majorCities.cities).forEach(cityObj => {
        const cityName = cityObj.name.toLowerCase();

        if (cityName.includes(searchString.toLowerCase())) {
            matchingCities.push(cityObj.name);
        }

    });

    return matchingCities;
}

