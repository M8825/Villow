import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
// import { fetchSearchListings } from "../../store/listingsReducer";
// import { getLocalStorageSearchCredentials } from "../../store/utils";
import { setSearchWord } from "../../store/searchFilters";

export const useSuggestionItem = (term, suggestion) => {
	const location = useLocation();
	const dispatch = useDispatch();
	const history = useHistory();

	const splash = location.pathname === "/";

	const handleSearchOnClickItem = (e) => {
		e.preventDefault();

		dispatch(setSearchWord(suggestion, term));

		if (splash) {
			history.push("/listings");
		}
	};

	return { splash, handleSearchOnClickItem };
};
