import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cleanSearchSuggestions } from "../../store/search";
import SuggestionItem from "./SuggestionItem";
import { getLocalStorageSearchCredentials } from "./getLocalStorageSearchCredentials"

import "./IndexSearchInput.scss";
import { SearchInputContainer } from "./SearchInputContainer";
import { useRef } from "react";
import { HomeListingType } from "./FilterButtons/HomeListingType";

export const SearchContext = createContext();

const IndexSearchInput = ({
  focuseSearch,
  setFocuseSearch,
  searchRef,
  handleSearchSubmit,
  handleSearchOnChange,
  value,
  setValue,
  term,
  setSuggestionsBox,
  suggestionsBox,
  suggestions,
}) => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const [closeDropDown, setCloseDropDown] = useState({ isClosed: false });
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    const { localStorageSearchWord } = getLocalStorageSearchCredentials();

    setSearchWord(localStorageSearchWord ? localStorageSearchWord : "New York, NY");
  }, []);

  useEffect(() => {
    dispatch(cleanSearchSuggestions());
  }, [closeDropDown]);

  const handleHover = (e) => e.target.classList.add("hovered");
  const onHoverLeave = (e) => e.target.classList.remove("hovered");

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
          onMouseEnter={handleHover}
          onMouseLeave={onHoverLeave}
          onClick={handleOnClick}
          ref={searchRef}
        >
          <SearchInputContainer
            inputRef={inputRef}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
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
                      setSearchWord={setSearchWord}
                    />
                  );
                })}
            </ul>
          </div>
        )}
      </div>
      <SearchContext.Provider value={{ searchWord, term }}>
        <div className="filter-buttons">
          <HomeListingType />
        </div>
      </SearchContext.Provider>
      <button onClick={handleSearchSubmit} className="search-button">
        foobar{" "}
      </button>
    </div>
  );
};

export default IndexSearchInput;
