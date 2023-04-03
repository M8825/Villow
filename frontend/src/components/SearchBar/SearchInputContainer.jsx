import { SearchWord } from "./SearchWord";

import "./SearchInputContainer.scss";
import SearchIcon from "./SearchIcon";

export const SearchInputContainer = ({
  searchWord,
  setSearchWord,
  focuseSearch,
  value,
  handleSearchOnChange,
  setSuggestionsBox,
}) => {
  return focuseSearch ? (
    <div className={"clicked-search-with-search-word"}>
      <SearchWord searchWord={searchWord} setSearchWord={setSearchWord} />
      <input
        className="text-input"
        type="text"
        value={value}
        onChange={handleSearchOnChange}
        onClick={() => setSuggestionsBox(true)}
        placeholder="Address, City, ZIP, state"
      />
    </div>
  ) : (
    <>
      {searchWord ? (
        <SearchWord searchWord={searchWord} setSearchWord={setSearchWord} />
      ) : (
        <input
          className="text-input"
          type="text"
          value={value}
          onChange={handleSearchOnChange}
          onClick={() => setSuggestionsBox(true)}
          placeholder="Address, City, ZIP, state"
        />
      )}

      {!focuseSearch && (
        <div className="search-icon-wrapper">
          <SearchIcon />
        </div>
      )}
    </>
  );
};
