import "./IndexSearchInput.scss";
import SearchIcon from "./SearchIcon";
import SuggestionItem from "./SuggestionItem";

const IndexSearchInput = ({
  handleSearchOnChange,
  handleSearchSubmit,
  value,
  term,
  suggestions,
  suggestionsBox,
  setSuggestionsBox,
  focuseSearch,
  setFocuseSearch,
  searchRef,
}) => {
  const handleOnclick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setFocuseSearch(true);
  };

  const handleHover = (e) => e.target.classList.add("hovered");
  const onHoverLeave = (e) => e.target.classList.remove("hovered");

  return (
    <div className="search-component-wrapper">
      <div className="search-input-wrapper">
        <div
          className={
            "search-input " + (focuseSearch ? "focused" : "not_focused")
          }
          onMouseEnter={handleHover}
          onMouseLeave={onHoverLeave}
          onClick={handleOnclick}
          ref={searchRef}
        >
          <input
            type="text"
            value={value}
            onChange={handleSearchOnChange}
            onClick={(e) => setSuggestionsBox(true)}
            placeholder="Address, City, ZIP, state"
            className="text-input"
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
          <div className="indexSearchDropdown">
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
        {" "}
        Value{" "}
      </button>
    </div>
  );
};

export default IndexSearchInput;
