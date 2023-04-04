import { CloseSearchWordIcon } from "./assets/CloseSearchWordIcon";
import "./SearchWord.scss";

export const SearchWord = ({ searchWord, setSearchWord }) => {
  const handleOnClickClose = (e) => {
    e.preventDefault();

    setSearchWord("");
  };

  return (
    searchWord && (
      <div className="searchw-word-container">
        <div className="search-word-wrapper">
          <span>{searchWord.trim()}</span>
          <div className="search-word-close-icon" onClick={handleOnClickClose}>
            <CloseSearchWordIcon />
          </div>
        </div>
      </div>
    )
  );
};
