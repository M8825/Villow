import { useDispatch, useSelector } from "react-redux";

import CurrentLocationIcon from "./assets/CurrentLocationIcon";
import SuggestionItem from "./SuggestionItem";
import { getSearchHistory, setSearchWord } from "../../store/searchFilters";

import "./SplashSearchHistorySuggestions.scss";
import SplashSearchHistorySuggestionIcon from "./assets/SplashSearchHistorySuggestionIcon";
import { getLocation, getUserCity } from "./utils/userLocation";
import { useHistory, useLocation } from "react-router-dom";

const SplashSearchHistorySuggestions = () => {
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
    searchHistory?.length > 0 && (
      <>
        <div className="empty-search-wrapper" onClick={handleCurrentLocation}>
          <CurrentLocationIcon />
          <div className="current-location">
            <p>Current Location</p>
          </div>
        </div>
        <ul className="suggestions-list">
          {searchHistory.map((searchHistoryObj, idx) => (
            <li key={idx} className="splash-search-history-list-item">
              <SplashSearchHistorySuggestionIcon />
              <SuggestionItem
                term={searchHistoryObj.term}
                suggestion={searchHistoryObj.suggestion}
                value={""}
              />
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default SplashSearchHistorySuggestions;
