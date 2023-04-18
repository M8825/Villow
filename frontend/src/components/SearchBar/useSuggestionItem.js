import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { fetchSearchListings } from "../../store/listingsReducer";
import { getLocalStorageSearchCredentials } from "../../store/utils";
import { setSearchWordToLocalStorage } from "../../store/searchFilters";

export const useSuggestionItem = (term, suggestion) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const splash = location.pathname === "/";

  const handleSearchOnClickItem = (e) => {

    e.preventDefault();


    let cleanSuggestion = "";
    let citySuffix;

    // Separate suggestions components if it's city - City, State
    dispatch(setSearchWordToLocalStorage(citySuffix, suggestion, term));


    const { listingType } = getLocalStorageSearchCredentials();


    dispatch(
      fetchSearchListings(term, cleanSuggestion, { listing_type: listingType })
    );

    history.push("/listings");
  };

  return { splash, handleSearchOnClickItem };
};
