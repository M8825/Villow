import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { fetchSearchListings } from "../../store/listingsReducer";

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

    const searchWordObj = JSON.stringify({
      [term]: cleanSuggestion,
      citySuffix: citySuffix,
      term: term
    });

    localStorage.setItem("searchWord", searchWordObj);

    dispatch(fetchSearchListings(term, cleanSuggestion));

    history.push("/listings");
  };

  return { splash, handleSearchOnClickItem };
};
