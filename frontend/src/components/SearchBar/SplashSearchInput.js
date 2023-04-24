import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import SplashSearchHistorySuggestions from "./SplashSearchHistorySuggestions";
import SearchIcon from "./SearchIcon";
import SuggestionItem from "./SuggestionItem";
import { getLocation, getUserCity } from "./utils/userLocation";
import { setSearchWord } from "../../store/searchFilters";

import "./SplashSearchInput.scss";
import { useState } from "react";
import { useEffect } from "react";

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

	const [searchBarClicked, setSearchBarClicked] = useState(false);

	useEffect(() => {

		const handleClickOutside = (e) => {
			if (e.target.classList.contains("splash-focused-search")) return;

			document
				.getElementsByClassName("splash-focused-search")[0]
				.classList.remove("splash-focused-search");

			setSearchBarClicked(false);
      debugger
		};

		document.body.addEventListener("click", handleClickOutside);

		return () => {
			document.body.removeEventListener("click", handleClickOutside);
		};
	}, [searchBarClicked]);

	// Direct user to listings index page with listings close to their location
	const handleCurrentLocation = async (e) => {
		e.preventDefault();

		const userLocation = await getLocation();
		const userCity = await getUserCity(userLocation);

		dispatch(setSearchWord(userCity, "city"));
		history.push("/listings");
	};

	function handleInputClick(e) {
		e.preventDefault();
    e.stopPropagation();

		e.currentTarget.classList.add("splash-focused-search");
		setSearchBarClicked(true);
	}

	return (
		<>
			<div className="search-input-dropdown-wrapper">
				<div className="splash-search-container" onClick={handleInputClick}>
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
		</>
	);
};

export default SplashSearchInput;
