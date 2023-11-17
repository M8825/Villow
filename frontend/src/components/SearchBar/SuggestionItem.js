import { space } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { setSearchHistory, setSearchWord } from "../../store/searchFilters";
import { findMatchingIndices } from "./searchUtils";

import "./SuggestionItem.scss";

const SuggestionItem = ({ term, suggestion, value }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  // returns start and end indecies of the matching substring
  // of the suggestion and the value. It's being used to
  // highlight the matching substring in the suggestion
  const [start, end] = findMatchingIndices(suggestion, value);

  const splash = location.pathname === "/";

  const handleSearchOnClickItem = (e) => {
    e.preventDefault();

    dispatch(setSearchWord(suggestion, term));
    dispatch(setSearchHistory(suggestion, term));

    if (splash) {
      history.push("/listings");
    }
  };

  return (
    <div
      className={
        "suggestions-item-container " +
        (splash ? "suggestion-item-splash" : "suggestion-item-index")
      }
      onClick={handleSearchOnClickItem}
    >
      {end ? (
        <>
          <p>
            {suggestion.slice(0, start)}
            <span className="highlighted">
              {suggestion.slice(start, end + 1)}
            </span>
            <span>{suggestion.slice(end + 1)}</span>
          </p>
        </>
      ) : (
        <p className="suggestion-item-splash">{suggestion}</p>
      )}
    </div>
  );
};

export default SuggestionItem;
