import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchListingsByState } from "./listingsReducer";

import "./SuggestionItem.scss";

const SuggestionItem = ({ term, suggestion, value }) => {
    const dispatch = useDispatch();
    const history = useHistory();


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
