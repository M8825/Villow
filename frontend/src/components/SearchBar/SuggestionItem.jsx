import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSearchListings } from "../../store/listingsReducer";

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
        e.stopPropagation()
        e.preventDefault();

        debugger
        dispatch(fetchSearchListings(term, suggestion));

        history.push('/listings')

    };


    return (
        <li className="suggestion-item" onClick={handleSearchOnClickItem}>
            {
                end ? (
                    <>
                        <p>{suggestion.slice(0, start)}
                            <span className="highlighted">{suggestion.slice(start, end + 1)}</span>
                            <span>{suggestion.slice(end + 1)}</span>
                        </p>
                    </>
                ) :
                    (<p>{suggestion}</p>)
            }
        </li>
    );
};

export default SuggestionItem;
