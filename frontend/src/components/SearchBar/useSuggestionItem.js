import { getRoles } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { fetchSearchListings } from "../../store/listingsReducer";
import { getLocalStorageSearchCredentials } from "./getLocalStorageSearchCredentials";

function strigifySearchWordObj(citySuffix, cleanSuggestion, term ) {
  const searchWordObj = JSON.stringify({
    [term]: cleanSuggestion,
    citySuffix: citySuffix,
    term: term,
  });
  return searchWordObj;
}

export const useSuggestionItem = (term, suggestion, setSearchWord) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const splash = location.pathname === "/";

  const handleSearchOnClickItem = (e) => {
    e.preventDefault();

    setSearchWord(suggestion);

    let cleanSuggestion = "";
    let citySuffix;

    if (term === "city") {
      cleanSuggestion = suggestion.split(",")[0];
      citySuffix = suggestion.split(",")[1];
    } else {
      cleanSuggestion = suggestion;
    }

    const searchWordObj = strigifySearchWordObj(citySuffix, cleanSuggestion, term);

    localStorage.setItem("searchWord", searchWordObj);

    const { listingType } = getLocalStorageSearchCredentials();

    dispatch(
      fetchSearchListings(term, cleanSuggestion, { listing_type: listingType })
    );

    history.push("/listings");
  };

  return { splash, handleSearchOnClickItem };
};
