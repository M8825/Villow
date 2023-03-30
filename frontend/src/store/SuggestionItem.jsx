import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchListingsByState } from "./listingsReducer";

import "./SuggestionItem.scss";

const SuggestionItem = ({ term, suggestion, value }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const matchingIndecies = () => {
        const matchingPart = [];

        for (let i = 0; i < suggestion.length; i++) {
            if (suggestion[i] === value[0]){
                let suggestionIdx = i;
                let tempMatching = [];

                for (let j = 0; j < value.length; j++){ 
                    if (suggestion[suggestionIdx] === value[j]){
                        tempMatching.push(suggestion[suggestionIdx]);
                        suggestionIdx++;
                    } else {
                        tempMatching = [];
                        break;
                    }
                };

                matchingPart.concat(tempMatching);
            };
        };
    };

	const handleSearchOnClickItem = (e) => {
		e.preventDefault();

        dispatch(fetchListingsByState(term, suggestion));

        history.push('/listings')

	};

	return (
		<li className="suggestion-item" onClick={handleSearchOnClickItem}>
			<span>{suggestion}</span>
		</li>
	);
};

export default SuggestionItem;
