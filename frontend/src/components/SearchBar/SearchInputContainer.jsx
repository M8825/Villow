import { SearchWord } from "./SearchWord";

import "./SearchInputContainer.scss";
import SearchIcon from "./SearchIcon";

export const SearchInputContainer = ({
  searchWord,
  setSearchWord,
  inputRef,
  value,
  handleSearchOnChange,
  setSuggestionsBox,
}) => {
  return (
    <div className={"clicked-search-with-search-word"}>
      <SearchWord searchWord={searchWord} setSearchWord={setSearchWord} />
      <input
        className="text-input"
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleSearchOnChange}
        onClick={() => setSuggestionsBox(true)}
        placeholder="Address, City, ZIP, state"
      />
    </div>
  );
};
