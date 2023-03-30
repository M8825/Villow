const matchingIndecies = (suggestion, value) => {
    const matchingPart = [];

    for (let i = 0; i < suggestion.length; i++) {
        if (suggestion[i] === value[0]) {
            let suggestionIdx = i;
            let tempMatching = [];

            for (let j = 0; j < value.length; j++) {
                console.log("here");
                if (suggestion[suggestionIdx] === value[j]) {
                    tempMatching.push(suggestionIdx);
                    suggestionIdx++;
                } else {
                    tempMatching = [];
                    break;
                }
            };

            matchingPart.concat(tempMatching);
        };
    };

    return matchingPart;
};


console.log(matchingIndecies('foobar', "ar"));
