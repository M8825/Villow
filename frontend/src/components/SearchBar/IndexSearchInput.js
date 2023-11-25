import { createContext, useEffect, useState, useRef, useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import SuggestionItem from "./SuggestionItem";

import { SearchInputContainer } from "./SearchInputContainer";
import { getSearchWord } from "../../store/searchFilters";
import { cleanSearchSuggestions } from "../../store/search";

import FilterButtons from "./FilterButtons/FilterButtons";
import IndexSearchHistorySuggestions from "./IndexSearchHistorySuggestions";

import "./IndexSearchInput.scss";

export const SearchContext = createContext();

const IndexSearch = ({
	handleSearchOnChange,
	value,
	term,
	setSuggestionsBox,
	suggestions,
	focusSearch,
	setFocusSearch,
	searchRef,
	setValue,
}) => {
	const dispatch = useDispatch();
	const inputRef = useRef();
	const searchWord = useSelector(getSearchWord());

	const [closeDropDown, setCloseDropDown] = useState({ isClosed: false });

	useEffect(() => {
		dispatch(cleanSearchSuggestions());
	}, [dispatch, closeDropDown]);

	function handleInputContainerClick(e) {
		e.preventDefault();
		e.stopPropagation();

		if (inputRef.current) inputRef.current.focus();
		setFocusSearch(true);
	}

	useEffect(() => {
		// Function to handle outside click of search input
		const handleOutsideClick = (e) => {
			if (searchRef.current && !searchRef.current.contains(e.target)) {
				setFocusSearch(false);
			}
		};

		if (focusSearch) {
			document.addEventListener("click", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [focusSearch, searchRef]);

	function handleSuggestionItemClick(e) {
		e.preventDefault();

		setValue("");
		setCloseDropDown({ isClosed: true });
	}

	return (
		<div className="search-component-wrapper">
			<div
				className={
					"search-input-wrapper " +
					(focusSearch && searchWord ? "focused-wrapper" : "")
				}
			>
				<div
					className={"search-input " + (focusSearch ? "focused" : "")}
					onClick={handleInputContainerClick}
					ref={searchRef}
				>
					<SearchInputContainer
						inputRef={inputRef}
						searchWord={searchWord}
						focusSearch={focusSearch}
						value={value}
						handleSearchOnChange={handleSearchOnChange}
						setSuggestionsBox={setSuggestionsBox}
					/>
				</div>

				{focusSearch && (
					<>
						<div
							className="indexSearchDropdown"
							onClick={handleSuggestionItemClick}
						>
							{suggestions?.length !== 0 ? (
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
								<IndexSearchHistorySuggestions />
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
