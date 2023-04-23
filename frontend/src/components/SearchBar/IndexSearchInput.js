import { createContext, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SearchInputContainer } from "./SearchInputContainer";
import { HomeListingType } from "./FilterButtons/HomeListingType/HomeListingType";
import PriceRange from "./FilterButtons/PriceRange/PriceRange";
import SuggestionItem from "./SuggestionItem";
import BedsAndBaths from "./FilterButtons/BedsAndBaths/BedsAndBaths";
import HomeType from "./FilterButtons/HomeType/HomeType";
import { getSearchWord } from "../../store/searchFilters";
import { cleanSearchSuggestions } from "../../store/search";
import "./IndexSearchInput.scss";


export const SearchContext = createContext();
const IndexSearch = ({
  handleSearchOnChange,
  value,
  term,
  setSuggestionsBox,
  suggestionsBox,
  suggestions,
  focuseSearch,
  setFocuseSearch,
  searchRef,
  setValue,
}) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const searchWord = useSelector(getSearchWord());

  const [closeDropDown, setCloseDropDown] = useState({ isClosed: false });

  useEffect(() => {
    dispatch(cleanSearchSuggestions());
  }, [closeDropDown]);

  const handleItemClick = (e) => {
    e.preventDefault();

    setValue("");
    setCloseDropDown({ isClosed: true });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (inputRef.current) inputRef.current.focus();

    setFocuseSearch(true);
  };

  return (
    <div className="search-component-wrapper">
      <div
        className={
          "search-input-wrapper " +
          (focuseSearch && searchWord ? "focused-wrapper" : "")
        }
      >
        <div
          className={"search-input " + (focuseSearch ? "focused" : "")}
          onClick={handleOnClick}
          ref={searchRef}
        >
          <SearchInputContainer
            inputRef={inputRef}
            searchWord={searchWord}
            focuseSearch={focuseSearch}
            value={value}
            handleSearchOnChange={handleSearchOnChange}
            setSuggestionsBox={setSuggestionsBox}
          />
        </div>

        {suggestionsBox ? (
          <div className="indexSearchDropdown">
            <p>initial search box</p>
          </div>
        ) : (
          <div className="indexSearchDropdown" onClick={handleItemClick}>
            <ul>
              {suggestions &&
                suggestions.map((suggestion, idx) => {
                  return (
                    <SuggestionItem
                      key={idx}
                      term={term}
                      value={value}
                      suggestion={suggestion}
                    />
                  );
                })}
            </ul>
          </div>
        )}
      </div>
      {/* TODO: get rid of the context*/}
      <SearchContext.Provider value={{ searchWord, term }}>
        <div className="filter-buttons">
          <HomeListingType />
        </div>
        <div className="filter-buttons">
          <PriceRange />
        </div>
      </SearchContext.Provider>
      <div className="filter-buttons">
        <BedsAndBaths />
      </div>
      <div className="filter-buttons">
        <HomeType />
      </div>
    </div>
  );
};

export default IndexSearch;
