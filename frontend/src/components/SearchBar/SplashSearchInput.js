import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import SplashSearchHistorySuggestions from "./SplashSearchHistorySuggestions";
import SearchIcon from "./SearchIcon";
import SuggestionItem from "./SuggestionItem";

import { setSearchWord } from "../../store/searchFilters";
import { getLocation, getUserCity } from "./utils/userLocation";
import { cleanSearchSuggestions } from "../../store/search";

import "./SplashSearchInput.scss";

const SplashSearchInput = ({
  handleSearchOnChange,
  handleSearchSubmit,
  value,
  term,
  suggestions,
  setSuggestionsBox,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [searchBarClicked, setSearchBarClicked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains("splash-focused-search")) return;

      document
        .getElementsByClassName("splash-focused-search")[0]
        .classList.remove("splash-focused-search");

      dispatch(cleanSearchSuggestions());

      setSearchBarClicked(false);
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [searchBarClicked]);

  // Direct user to listings index page with listings close to their location
  // const handleCurrentLocation = async (e) => {
  //   e.preventDefault();

  //   const userLocation = await getLocation();
  //   const userCity = await getUserCity(userLocation);

  //   dispatch(setSearchWord(userCity, "city"));
  //   history.push("/listings");
  // };

  function handleInputClick(e) {
    e.preventDefault();
    e.stopPropagation();

    e.currentTarget.classList.add("splash-focused-search");
    setSearchBarClicked(true);
  }

  return (
    <div style={{ zIndex: 5 }}>
      <div className="search-input-dropdown-wrapper">
        <div className="splash-search-container" onClick={handleInputClick}>
          <input
            className="search_container__search_bar"
            type="text"
            value={value}
            placeholder="Enter address, neighborhood, city, or ZIP code"
            onChange={handleSearchOnChange}
            onClick={(e) => setSuggestionsBox(true)}
          />
          <div
            className="search_container__search_button"
            onClick={handleSearchSubmit}
          >
            <SearchIcon />
          </div>
        </div>
      </div>

      <div className="splash-suggestions-dropdown">
        {searchBarClicked && suggestions.length === 0 ? (
          <SplashSearchHistorySuggestions />
        ) : (
          <ul className="fetched-suggestions-wrapper">
            {suggestions &&
              suggestions.map((suggestion, idx) => {
                return (
                  <div className="item-wrapper">
                    <SuggestionItem
                      key={idx * 3}
                      term={term}
                      value={value}
                      suggestion={suggestion}
                    />
                  </div>
                );
              })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SplashSearchInput;
