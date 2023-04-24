import { useSelector } from "react-redux";

import CurrentLocationIcon from "./assets/CurrentLocationIcon";
import SuggestionItem from "./SuggestionItem";
import { getSearchHistory } from "../../store/searchFilters";

import "./SplashSearchHistorySuggestions.scss";
import SplashSearchHistorySuggestionIcon from "./assets/SplashSearchHistorySuggestionIcon";

const SplashSearchHistorySuggestions = ({ handleCurrentLocation }) => {
	const searchHistory = useSelector(getSearchHistory());

	return (
		searchHistory?.length > 0 && (
			<>
				<div className="empty-search-wrapper" onClick={handleCurrentLocation}>
					<CurrentLocationIcon />
					<div className="current-location">
						<p>Current Location</p>
					</div>
				</div>
				<ul >
					{searchHistory.map((searchHistoryObj, idx) => (
						<li className="splash-search-history-list-item">
              <SplashSearchHistorySuggestionIcon />
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
		)
	);
};

export default SplashSearchHistorySuggestions;
