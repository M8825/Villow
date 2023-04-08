import { useDispatch } from "react-redux";
import { fetchSearchListings } from "../../../../store/listingsReducer";
import DropDown from "../DropDown";

import "./HomeListingType.scss";
import { getLocalStorageSearchCredentials } from "../../getLocalStorageSearchCredentials";
import { useEffect, useState } from "react";
import { SearchContext } from "../../IndexSearchInput";
import { useContext } from "react";

export const HomeListingType = () => {
	const dispatch = useDispatch();
	const { searchWord, term } = useContext(SearchContext);

	const [selectedOption, setSelectedOption] = useState(""); // ["for-sale", "for-rent"

	useEffect(() => {
		const storedListingType = localStorage.getItem("listingType");

		if (storedListingType) {
			setSelectedOption(storedListingType);
		} else {
			setSelectedOption("For Sale");
		}
	}, []);

	function handleOnChangeRadioBtn(e) {
		e.stopPropagation();
		const listingType = e.target.name;

		setSelectedOption(listingType);
		// Add clicked listing type "For Sale" or "For Rent" to localStorage
		localStorage.setItem("listingType", listingType);

		// Clean up search word for request
		const cleanSearchWord = cleanUpSearchWord(searchWord, term);

		if (!(term && cleanSearchWord)) {
			let { localStorageTerm, localStorageSearchWord } =
				getLocalStorageSearchCredentials();

			localStorageSearchWord = localStorageSearchWord.split(",")[0]; // Grab only city form "City, State" string
			dispatch(
				fetchSearchListings(localStorageTerm, localStorageSearchWord, {
					listing_type: listingType,
				})
			);
		} else {
			dispatch(
				fetchSearchListings(term, cleanSearchWord, {
					listing_type: listingType,
				})
			);
		}
	}

	return (
		<DropDown buttonValue={selectedOption}>
			<div htmlFor="for-sale" className="lbl">
				<input
					type="radio"
					id="for-sale"
					name="Sale"
					value="For Sale"
					checked={selectedOption === "Sale"}
					onChange={handleOnChangeRadioBtn}
				/>
				<span>For Sale</span>
			</div>
			<div htmlFor="for-rent" className="lbl">
				<input
					type="radio"
					id="for-rent"
					name="Rent"
					value="For Rent"
					onChange={handleOnChangeRadioBtn}
					checked={selectedOption === "Rent"}
				/>
				<span>For Rent</span>
			</div>

			<input type="submit" value="Apply" />
		</DropDown>
	);
};

function cleanUpSearchWord(SearchWord, term) {
	let cleanSearchWord = SearchWord;
	// Split in if condition to avoid error when searchWord is empty
	// or when searchWord is a street addrewss
	if (term === "city") {
		cleanSearchWord = SearchWord.split(",")[0]; // Grab City from "city, state"
	}
	return cleanSearchWord;
}
