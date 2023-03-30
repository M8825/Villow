import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchListingsByState, } from "../../store/listingsReducer";

import { findMatchingIndices } from "./searchUtils";

import "./SuggestionItem.scss";

const SuggestionItem = ({ term, suggestion, value }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    // returns start and end indecies of the matching substring
    // of the suggestion and the value. It's beeing used to 
    // highlight the matching substring in the suggestion
    const [start, end] = findMatchingIndices(suggestion, value);


    const handleSearchOnClickItem = (e) => {
        e.preventDefault();

        dispatch(fetchListingsByState(term, suggestion));

        history.push('/listings')

    };

    return (
        <li className="suggestion-item" onClick={handleSearchOnClickItem}>
            {
                start && end ? (
                    <>
                        <p>{suggestion.slice(0, start)}
                            <span className="highlighted">{suggestion.slice(start, end + 1)}</span></p>
                        <span>{suggestion.slice(end + 1)}</span>
                    </>
                ) :
                    (<p>{suggestion}</p>)
            }
        </li>
    );
};

export default SuggestionItem;
