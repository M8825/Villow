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
	focuseSearch,
}) => {
	const dispatch = useDispatch();

	const handleOnClickClose = (e) => {
		e.preventDefault();

		// TODO: Reset search word
		dispatch(setSearchWord(""));
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
				{!focuseSearch && searchWord && (
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
				className="text-input"
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
