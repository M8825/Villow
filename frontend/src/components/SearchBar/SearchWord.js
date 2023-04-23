import { useDispatch } from "react-redux";
import { CloseSearchWordIcon } from "./assets/CloseSearchWordIcon";
import { setSearchWordToLocalStorage } from "../../store/searchFilters";

import "./SearchWord.scss";

export const SearchWord = ({ searchWord }) => {
  const dispatch = useDispatch();

  const handleOnClickClose = (e) => {
    e.preventDefault();

    // TODO: Reset search word
    dispatch(setSearchWordToLocalStorage(""));
  };

  return (
    searchWord && (
      <div className="search-word-wrapper">
        <p>{searchWord.trim()}</p>
        <div className="search-word-close-icon" onClick={handleOnClickClose}>
          <CloseSearchWordIcon />
        </div>
      </div>
    )
  );
};
