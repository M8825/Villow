import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cleanSearchSuggestions } from "../../store/search";
import SuggestionItem from "./SuggestionItem";

import "./IndexSearchInput.scss";
import { SearchInputContainer } from "./SearchInputContainer";
import { useRef } from "react";
import { HomeListingType } from "./FilterButtons/HomeListingType";

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
            searchWord={searchWord}
            inputRef={inputRef}
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
      <div className="filter-buttons">
        <HomeListingType />
      </div>

      <button onClick={handleSearchSubmit} className="search-button">
        foobar{" "}
      </button>
    </div>
  );
};

export default IndexSearchInput;
