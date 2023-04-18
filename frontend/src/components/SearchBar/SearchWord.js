import { useDispatch } from "react-redux";
import { CloseSearchWordIcon } from "./assets/CloseSearchWordIcon";
import "./SearchWord.scss";
import { setSearchWordToLocalStorage } from "../../store/searchFilters";

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
        <span>{searchWord.trim()}</span>
        <div className="search-word-close-icon" onClick={handleOnClickClose}>
          <CloseSearchWordIcon />
        </div>
      </div>
    )
  );
};
