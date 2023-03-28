import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanSearchSuggestions, getSuggestions, searchSuggestions } from "../../store/search";
import SuggestionItem from "../../store/SuggestionItem";
import "./SearchBar.scss";
import SearchIcon from "./SearchIcon";
import { statesMatch } from "./utils";

const SearchBar = () => {
	const dispatch = useDispatch();
	const suggestions = useSelector(getSuggestions());
	const [dropdownEmpty, setDropdownEmpty] = useState(false);

    useEffect(() => {
        if (dropdownEmpty) {
            dispatch(cleanSearchSuggestions());

        }
    }, [dispatch, dropdownEmpty])

	const handleSearchOnChange = (e) => {
		const searchString = e.target.value;

		if (searchString.length === 0) {
			setDropdownEmpty(true);
		} else if (statesMatch(searchString)) {
            setDropdownEmpty(false);
			dispatch(searchSuggestions(statesMatch(searchString), "state"));
		}
	};

	return (
		<div className="search-input-dropdown-wrapper" onMouseLeave={(e) => setDropdownEmpty(false)}>
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
                    onClick={(e) => setDropdownEmpty(true)}
				/>
				<div className="search_container__search_button">
					<SearchIcon />
				</div>
			</div>

			{dropdownEmpty ? (
				<p>Empty search options</p>
			) : (
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
			)}
		</div>
	);
};

export default SearchBar;
