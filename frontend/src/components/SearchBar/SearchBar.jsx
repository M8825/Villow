import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";

import {
  cleanSearchSuggestions,
  getSuggestions,
  searchSuggestions,
} from "../../store/search";
import { fetchSearchListings } from "../../store/listingsReducer";
import { statesMatch, citiesMatch, zipCodeMatch } from "./searchUtils";

import SplashSearchInput from "./SearchInput";

import "./SearchBar.scss";
import IndexSearchInput from "./IndexSearchInput";

const SearchBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const isAtListinIndex = location.pathname === "/listings";
  debugger

  const suggestions = useSelector(getSuggestions());
  const [suggestionsBox, setSuggestionsBox] = useState(false);
  const [term, setTerm] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (suggestionsBox) {
      dispatch(cleanSearchSuggestions());
    }

    // clean on unmount
    return () => {
      dispatch(cleanSearchSuggestions());
    };
  }, [dispatch, suggestionsBox]);

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
      dispatch(searchSuggestions(citiesMatch(searchString), "city"));
    } else if (searchString.length >= 3 && zipCodeMatch(searchString)) {
      setSuggestionsBox(false);
      setTerm("zipcode");

      // fetch suggestions based on zip code
      dispatch(searchSuggestions(searchString, "zipcode"));
    } else if (searchString.length >= 3) {
      setSuggestionsBox(false);
      setTerm("streetAddress");

      dispatch(searchSuggestions(searchString, "streetAddress"));
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
    <>
      {isAtListinIndex ? (
        <IndexSearchInput />
      ) : (
        <SplashSearchInput
          handleSearchSubmit={handleSearchSubmit}
          handleSearchOnChange={handleSearchOnChange}
          value={value}
          term={term}
          setSuggestionsBox={setSuggestionsBox}
          suggestionsBox={suggestionsBox}
          suggestions={suggestions}
        />
      )}
    </>
  );
};

export default SearchBar;
