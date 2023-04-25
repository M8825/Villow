import { useSelector } from "react-redux";
import { getSearchHistory } from "../../store/searchFilters";
import SuggestionItem from "./SuggestionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

import "./IndexSearchHistorySuggestions.scss";

const IndexSearchHistorySuggestions = ({ handleCurrentLocation }) => {
  const searchHistory = useSelector(getSearchHistory());

  return (
    <>
      <div
        className="index-empty-search-wrapper"
        onClick={handleCurrentLocation}
      >
        <div className="index-current-location">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="idnex-location-icon"
          />
          <p>Current Location</p>
        </div>
      <ul>
        {searchHistory.map((searchHistoryObj, idx) => (
          <li key={idx} className="index-search-history-list-item">
            <FontAwesomeIcon icon={faClock} className="index-clock-icon" />
            <SuggestionItem
              term={searchHistoryObj.term}
              suggestion={searchHistoryObj.suggestion}
              value={""}
            />
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default IndexSearchHistorySuggestions;
