import { createContext, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import SuggestionItem from "./SuggestionItem";

import { SearchInputContainer } from "./SearchInputContainer";
import { getSearchWord, setSearchWord } from "../../store/searchFilters";
import { cleanSearchSuggestions } from "../../store/search";

import InitialSearchBox from "./InitialSearchBox";
import { getLocation, getUserCity } from "./utils/userLocation";
import { fetchSearchListings } from "../../store/listingsReducer";

import FilterButtons from "./FilterButtons/FilterButtons";

import "./IndexSearchInput.scss";

export const SearchContext = createContext();

const IndexSearch = ({
	handleSearchOnChange,
	value,
	term,
	setSuggestionsBox,
	suggestions,
	focuseSearch,
	setFocuseSearch,
	searchRef,
	setValue,
}) => {
	const dispatch = useDispatch();
	const inputRef = useRef();
	const searchWord = useSelector(getSearchWord());

	const [closeDropDown, setCloseDropDown] = useState({ isClosed: false });

	useEffect(() => {
		dispatch(cleanSearchSuggestions());
	}, [closeDropDown]);

	function handleInputContainerClick(e) {
		e.preventDefault();
		e.stopPropagation();

		if (inputRef.current) inputRef.current.focus();

		setFocuseSearch(true);
	}

	function handleSuggestionItemClick(e) {
		e.preventDefault();

		setValue("");
		setCloseDropDown({ isClosed: true });
	}

	async function handleCurrentLocation(e) {
		e.preventDefault();
		debugger;

		const userLocation = await getLocation();
		const userCity = await getUserCity(userLocation);
		debugger;

		dispatch(setSearchWord);

		dispatch(fetchSearchListings("city", userCity));
	}

	return (
		<div className="search-component-wrapper">
			<div
				className={
					"search-input-wrapper " +
					(focuseSearch && searchWord ? "focused-wrapper" : "")
				}
			>
				<div
					className={
						"search-input " + (focuseSearch ? "focused" : "")
					}
					onClick={handleInputContainerClick}
					ref={searchRef}
				>
					<SearchInputContainer
						inputRef={inputRef}
						searchWord={searchWord}
						focuseSearch={focuseSearch}
						value={value}
						handleSearchOnChange={handleSearchOnChange}
						setSuggestionsBox={setSuggestionsBox}
					/>
				</div>

				{focuseSearch && (
					<>
						<div
							className="indexSearchDropdown"
							onClick={handleSuggestionItemClick}
						>
							{suggestions.length !== 0 ? (
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
							) : (
								<InitialSearchBox
									handleCurrentLocation={
										handleCurrentLocation
									}
								/>
							)}
						</div>
					</>
				)}
			</div>

			<FilterButtons />
		</div>
	);
};

export default IndexSearch;
