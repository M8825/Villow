import { useState } from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { setSearchWord } from "../../store/searchFilters";
import { CloseSearchWordIcon } from "./assets/CloseSearchWordIcon";

import "./SearchInputContainer.scss";

export const SearchInputContainer = ({
	searchWord,
	inputRef,
	value,
	handleSearchOnChange,
	setSuggestionsBox,
	focusSearch,
}) => {
	const dispatch = useDispatch();

  const [searchWordPresent, setSearchWordPresent] = useState(true);

	const handleOnClickClose = (e) => {
		e.preventDefault();

    setSearchWordPresent(false);

		// NOTE: It clear search word, but when app checks localStorage
		// it still has the search word. So, when user refreshes the page
		// the search word will be set to initial search New York, NY
		dispatch(setSearchWord("", ""));
	};

	return (
		<div className="search-container">
			<div className="search-word-row">
				{searchWord && (
					<div className="search-word-wrapper">
						<p>{searchWord.trim()}</p>
						<div
							className="search-word-close-icon"
							onClick={handleOnClickClose}
						>
							<CloseSearchWordIcon />
						</div>
					</div>
				)}
				{!focusSearch && searchWord && (
					<>
						<div className="add-another-container">
							<p>Add another location</p>
						</div>
						<div className="icon-container">
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</div>
					</>
				)}
			</div>
				<input
					className={"text-input " + (searchWordPresent ? "" : "no-search-word")}
					ref={inputRef}
					type="text"
					value={value}
					onChange={handleSearchOnChange}
					onClick={() => setSuggestionsBox(true)}
					placeholder="Address, City, ZIP, state"
				/>
		</div>
	);
};
