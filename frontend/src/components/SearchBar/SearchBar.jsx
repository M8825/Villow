import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    cleanSearchSuggestions,
    getSuggestions,
    searchSuggestions,
} from "../../store/search";
import SuggestionItem from "./SuggestionItem";
import SearchIcon from "./SearchIcon";
import InitialSearchBox from "./InitialSearchBox";
import { statesMatch, citiesMatch } from "./searchUtils";
import { zipCodeMatch } from "./searchUtils";

import "./SearchBar.scss";
import { fetchSearchListings } from "../../store/listingsReducer";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const suggestions = useSelector(getSuggestions());
    const [dropdownEmpty, setDropdownEmpty] = useState(false);
    const [term, setTerm] = useState("");
    const [value, setValue] = useState("");

    useEffect(() => {
        if (dropdownEmpty) {
            dispatch(cleanSearchSuggestions());
        }

        // clean on unmount
        return () => {
            dispatch(cleanSearchSuggestions());
        };
    }, [dispatch, dropdownEmpty]);

    const handleSearchOnChange = (e) => {
        const searchString = e.target.value;

        setValue(searchString);

        if (searchString.length === 0) {
            setDropdownEmpty(true);
        } else if (statesMatch(searchString)) {
            setDropdownEmpty(false);
            setTerm("state");

            dispatch(searchSuggestions(statesMatch(searchString), "state"));
        } else if (
            searchString.length >= 3 &&
            citiesMatch(searchString).length > 0
        ) {
            setDropdownEmpty(false);
            setTerm("city");
            // fetch suggestions based on city name
            dispatch(searchSuggestions(citiesMatch(searchString), "city"));
        } else if (searchString.length >= 3 && zipCodeMatch(searchString)) {
            setDropdownEmpty(false);
            setTerm("zipcode");

            // fetch suggestions based on zip code
            dispatch(searchSuggestions(searchString, "zipcode"));
        } else if (searchString.length >= 3) {
            setDropdownEmpty(false);
            setTerm("streetAddress");

            dispatch(searchSuggestions(searchString, "streetAddress"));
        } else {
            debugger;
            setDropdownEmpty(true);
            dispatch(cleanSearchSuggestions());
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        dispatch(fetchSearchListings(term, suggestions[0]));
        history.push("/listings");
    };
    return (
        <div
            className="search-input-dropdown-wrapper"
            onMouseLeave={(e) => {
                setDropdownEmpty(false);

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
                ) {
                    e.target.parentElement.classList.add("focused");
                }
            }}
        >
            <div className="search-container">
                <input
                    className="search_container__search_bar"
                    type="text"
                    value={value}
                    placeholder="Enter address, neighborhood, city, or ZIP code"
                    onChange={handleSearchOnChange}
                    onClick={(e) => setDropdownEmpty(true)}
                />
                <div
                    className="search_container__search_button"
                    onClick={handleSearchSubmit}
                >
                    <SearchIcon />
                </div>
            </div>

            {dropdownEmpty ? (
                <InitialSearchBox />
            ) : (
                <div className="dropdown">
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
                </div>
            )}
        </div>
    );
};

export default SearchBar;
