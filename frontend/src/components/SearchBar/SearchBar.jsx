import { useDispatch, useSelector } from "react-redux";
import { getSuggestions, searchSuggestions } from "../../store/search";
import SuggestionItem from "../../store/SuggestionItem";
import "./SearchBar.scss";
import SearchIcon from "./SearchIcon";
import { statesMatch } from "./utils";

const SearchBar = () => {
	const dispatch = useDispatch();
	const suggestions = useSelector(getSuggestions());

	const handleSearchOnChange = (e) => {
		const searchString = e.target.value;

		if (statesMatch(searchString)) {
			debugger;
			dispatch(searchSuggestions(statesMatch(searchString), "state"));
		}
	};

	return (
		<div className="search-input-dropdown-wrapper">
			<div
				className="search-container"
				onMouseEnter={(e) => {
					if (
						e.target.parentElement.className
							.split(" ")
							.includes("search-container")
					) {
						e.target.parentElement.classList.add("focused");
					}
				}}
				onMouseLeave={(e) => {
					if (
						e.target.parentElement.className
							.split(" ")
							.includes("search-container")
					) {
						e.target.parentElement.classList.remove("focused");
					}
				}}
			>
				<input
					className="search_container__search_bar"
					type="text"
					placeholder="Enter address, neighborhood, city, or ZIP code"
					onChange={handleSearchOnChange}
				/>
				<div className="search_container__search_button">
					<SearchIcon />
				</div>
			</div>

			<div className="dropdown">
				<ul>
					{suggestions &&
						suggestions.map((suggestion, idx) => {
							return (
								<SuggestionItem
									key={idx}
									suggestion={suggestion}
								/>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default SearchBar;
