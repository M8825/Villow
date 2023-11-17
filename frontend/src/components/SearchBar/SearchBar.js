import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import {
  cleanSearchSuggestions,
  getSuggestions,
  searchSuggestions,
} from "../../store/search";
import { fetchSearchListings } from "../../store/listingsReducer";
import { statesMatch, citiesMatch, digitsMatcher } from "./searchUtils";

import SplashSearchInput from "./SplashSearchInput";
import IndexSearchInput from "./IndexSearchInput";

import "./SearchBar.scss";

const SearchBar = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  const isAtListingIndex = location.pathname === "/listings";

  const suggestions = useSelector(getSuggestions);
  const [suggestionsBox, setSuggestionsBox] = useState(false);
  const [term, setTerm] = useState("");
  const [value, setValue] = useState("");

  // IndexSearchInput - hide search icon when clicked outside component
  const [focusSearch, setFocusSearch] = useState(false);

  const handleSearchOnChange = (e) => {
    const searchString = e.target.value;

    setValue(searchString);
    if (searchString.length === 0) {
      setSuggestionsBox(true);
    } else if (statesMatch(searchString)) {
      setSuggestionsBox(false);
      setTerm("state");

      dispatch(searchSuggestions(statesMatch(searchString), "state"));
    } else if (
      searchString.length >= 3 &&
      citiesMatch(searchString).length > 0
    ) {
      setSuggestionsBox(false);
      setTerm("city");
      // fetch suggestions based on city name
      dispatch(searchSuggestions(searchString, "city"));
    } else if (
      searchString.length >= 3 &&
      digitsMatcher(searchString)
    ) {
      setSuggestionsBox(false);
      setTerm("zipcode");

      // fetch suggestions based on zip code
      dispatch(searchSuggestions(searchString, "zipcode"));
    } else if (searchString.length >= 3) {
      setSuggestionsBox(false);
      setTerm("address");

      dispatch(searchSuggestions(searchString, "address"));
    } else {
      // Clear search suggestions in state and display initial search box
      setSuggestionsBox(true);
      dispatch(cleanSearchSuggestions());
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchSearchListings(term, suggestions[0]));
    history.push("/listings");
  };

  return (
    <div className= { isAtListingIndex ? "search_bar_container" : null}>
      {isAtListingIndex ? (
        <>
          <IndexSearchInput
            handleSearchOnChange={handleSearchOnChange}
            value={value}
            term={term}
            setSuggestionsBox={setSuggestionsBox}
            suggestionsBox={suggestionsBox}
            suggestions={suggestions}
            focusSearch={focusSearch}
            setFocusSearch={setFocusSearch}
            searchRef={searchRef}
            setValue={setValue}
          />
        </>
      ) : (
        <SplashSearchInput handleSearchSubmit={handleSearchSubmit}
          handleSearchOnChange={handleSearchOnChange}
          value={value}
          term={term}
          setSuggestionsBox={setSuggestionsBox}
          suggestionsBox={suggestionsBox}
          suggestions={suggestions}
        />
      )}
    </div>
  );
};

export default SearchBar;
