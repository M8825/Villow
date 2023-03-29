import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./SuggestionItem.scss";
import { fetchListingsByState } from "./listingsReducer";

const SuggestionItem = ({ term, suggestion }) => {
    const dispatch = useDispatch();
    const history = useHistory();

	const handleSearchOnClickItem = (e) => {
		e.preventDefault();

        dispatch(fetchListingsByState(term, suggestion));

        history.push('/listings')

	};

	return (
		<li className="suggestion-item" onClick={handleSearchOnClickItem}>
			{suggestion}
		</li>
	);
};

export default SuggestionItem;
