import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cleanSearchSuggestions } from "../../store/search";
import SearchIcon from "./SearchIcon";
import { SearchWord } from "./SearchWord";
import SuggestionItem from "./SuggestionItem";

import "./IndexSearchInput.scss";

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

    debugger
    setSearchWord(e.target.innerText);
    setValue("");
    setCloseDropDown({ isClosed: true });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setFocuseSearch(true);
  };

  console.log("searchWord", searchWord);

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
          <SearchWord word={searchWord} />
          <input
            className="text-input"
            type="text"
            value={value}
            onChange={handleSearchOnChange}
            onClick={(e) => setSuggestionsBox(true)}
            placeholder="Address, City, ZIP, state"
          />
          {!focuseSearch && (
            <div className="search-icon-wrapper">
              <SearchIcon />
            </div>
          )}
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
