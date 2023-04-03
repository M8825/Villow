import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cleanSearchSuggestions } from "../../store/search";
import SearchIcon from "./SearchIcon";
import SuggestionItem from "./SuggestionItem";

import "./IndexSearchInput.scss";
import { SearchInputContainer } from "./SearchInputContainer";

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

  const [closeDropDown, setCloseDropDown] = useState({ isClosed: false });
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    dispatch(cleanSearchSuggestions());
  }, [closeDropDown]);

  const handleHover = (e) => e.target.classList.add("hovered");
  const onHoverLeave = (e) => e.target.classList.remove("hovered");

  const handleItemClick = (e) => {
    e.preventDefault();

    setSearchWord(e.target.parentElement.innerText);
    setValue("");
    setCloseDropDown({ isClosed: true });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setFocuseSearch(true);
  };

  return (
    <div className="search-component-wrapper">
      <div className="search-input-wrapper">
        <div
          className={
            "search-input " + (focuseSearch ? "focused" : "not_focused")
          }
          onMouseEnter={handleHover}
          onMouseLeave={onHoverLeave}
          onClick={handleOnClick}
          ref={searchRef}
        >
          <SearchInputContainer
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
                    />
                  );
                })}
            </ul>
          </div>
        )}
      </div>

      <button onClick={handleSearchSubmit} className="search-button">
        Value{" "}
      </button>
    </div>
  );
};

export default IndexSearchInput;
