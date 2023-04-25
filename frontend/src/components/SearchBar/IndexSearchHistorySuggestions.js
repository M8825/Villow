import { useSelector } from "react-redux";
import { getSearchHistory } from "../../store/searchFilters";
import SuggestionItem from "./SuggestionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";

import "./IndexSearchHistorySuggestions.scss";

const IndexSearchHistorySuggestions = ({ handleCurrentLocation }) => {
	const searchHistory = useSelector(getSearchHistory());

  return (
    <>
      <div className="index-empty-search-wrapper" onClick={handleCurrentLocation}>
        <div className="index-current-location">
          <FontAwesomeIcon icon={faLocationDot} className="idnex-location-icon" />
          <p>Current Location</p>
        </div>
      </div>
      <ul>
        {searchHistory.map((searchHistoryObj, idx) => (
          <li className="index-search-history-list-item">
            <SuggestionItem
              key={idx}
              term={searchHistoryObj.term}
              suggestion={searchHistoryObj.suggestion}
              value={""}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default IndexSearchHistorySuggestions;
