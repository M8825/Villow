import { useDispatch, useSelector } from "react-redux";
import { getSearchHistory, setSearchWord } from "../../store/searchFilters";
import SuggestionItem from "./SuggestionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

import "./IndexSearchHistorySuggestions.scss";
import { useHistory } from "react-router-dom";
import { getLocation, getUserCity } from "./utils/userLocation";

const IndexSearchHistorySuggestions = () => {
  const searchHistory = useSelector(getSearchHistory());

  const dispatch = useDispatch();
  const history = useHistory();


  const handleCurrentLocation = async (e) => {
    e.preventDefault();

    const userLocation = await getLocation();
    const userCity = await getUserCity(userLocation);

    dispatch(setSearchWord(userCity, "city"));

    // Redirect user to listings index page with listings close to their location
    history.push("/listings");
  };

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
