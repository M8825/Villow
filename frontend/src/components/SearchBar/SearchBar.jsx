import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanSearchSuggestions, getSuggestions, searchSuggestions } from "../../store/search";
import SuggestionItem from "../../store/SuggestionItem";
import SearchIcon from "./SearchIcon";

import { statesMatch } from "./utils";

import "./SearchBar.scss";

const SearchBar = () => {
    const dispatch = useDispatch();
    const suggestions = useSelector(getSuggestions());
	const [dropdownEmpty, setDropdownEmpty] = useState(false);
    const [term, setTerm] = useState("");

    useEffect(() => {
        if (dropdownEmpty) {
            dispatch(cleanSearchSuggestions());
        }

        // clean on unmount
        return ()=> {
            dispatch(cleanSearchSuggestions());
        }
    }, [dispatch, dropdownEmpty])

	const handleSearchOnChange = (e) => {
		const searchString = e.target.value;

		if (searchString.length === 0) {
			setDropdownEmpty(true);
		} else if (statesMatch(searchString)) {
            setDropdownEmpty(false);
            setTerm("state");
            //this is the line I"m working on

			dispatch(searchSuggestions(statesMatch(searchString), "state"));
		}
	};


	return (
        <div className="search-input-dropdown-wrapper" onMouseLeave={(e) => {
            setDropdownEmpty(false)

            if (
                e.target.parentElement.className
                .split(" ")
                .includes("search-container")
            ) {
                e.target.parentElement.classList.remove("focused");
            }
        }}
        onMouseEnter={(e) => {
            if (
                e.target.parentElement.className
                .split(" ")
                .includes("search-container")
            ){
                e.target.parentElement.classList.add("focused");
            }
        }}
        >
			<div
				className="search-container"
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
                                        term={term}
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
