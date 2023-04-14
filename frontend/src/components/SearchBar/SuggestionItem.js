import { findMatchingIndices } from "./searchUtils";
import { useSuggestionItem } from "./useSuggestionItem";

import "./SuggestionItem.scss";

const SuggestionItem = ({ term, suggestion, value }) => {
  const { splash, handleSearchOnClickItem } = useSuggestionItem(
    term,
    suggestion,
  );

  // returns start and end indecies of the matching substring
  // of the suggestion and the value. It's beeing used to
  // highlight the matching substring in the suggestion
  const [start, end] = findMatchingIndices(suggestion, value);

  return (
    <li
      className={splash ? "suggestion-item-splash" : "suggestion-item-index"}
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
        <p>{suggestion}</p>
      )}
    </li>
  );
};

export default SuggestionItem;
