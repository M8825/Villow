import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import SplashSearchHistorySuggestions from "./SplashSearchHistorySuggestions";
import SearchIcon from "./SearchIcon";
import SuggestionItem from "./SuggestionItem";
import { getLocation, getUserCity } from "./utils/userLocation";
import { setSearchWord } from "../../store/searchFilters";

import "./SplashSearchInput.scss";

const SplashSearchInput = ({
	handleSearchOnChange,
	handleSearchSubmit,
	value,
	term,
	suggestions,
	suggestionsBox,
	setSuggestionsBox,
}) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleMouseLeave = (e) => {
		e.preventDefault();

		setSuggestionsBox(false);

		if (
			e.target.parentElement.className.split(" ").includes("search-container")
		) {
			e.target.parentElement.classList.remove("focused");
		}
	};

	const handleMouseEnter = (e) => {
		e.preventDefault();

		if (
			e.target.parentElement.className.split(" ").includes("search-container")
		) {
			e.target.parentElement.classList.add("focused");
		}
	};

	// Direct user to listings index page with listings close to their location
	const handleCurrentLocation = async (e) => {
		e.preventDefault();

		const userLocation = await getLocation();
		const userCity = await getUserCity(userLocation);

		dispatch(setSearchWord(userCity, "city"));
		history.push("/listings");
	};

	return (
		<div
			className="search-input-dropdown-wrapper"
			onMouseLeave={handleMouseLeave}
			onMouseEnter={handleMouseEnter}
		>
			<div className="search-container">
				<input
					className="search_container__search_bar"
					type="text"
					value={value}
					placeholder="Enter address, neighborhood, city, or ZIP code"
					onChange={handleSearchOnChange}
					onClick={(e) => setSuggestionsBox(true)}
				/>
				<div
					className="search_container__search_button"
					onClick={handleSearchSubmit}
				>
					<SearchIcon />
				</div>
			</div>

			<div className="suggestions-dropdown">
				{suggestionsBox ? (
					<SplashSearchHistorySuggestions
						handleCurrentLocation={handleCurrentLocation}
					/>
				) : (
					<ul>
						{suggestions &&
							suggestions.map((suggestion, idx) => {
								return (
									<SuggestionItem
										key={idx}
										term={term}
										value={value}
										suggestion={suggestion}
									/>
								);
							})}
					</ul>
				)}
			</div>
		</div>
	);
};

export default SplashSearchInput;
