import { useDispatch } from "react-redux";
import { useEffect, useState, useContext } from "react";
import { fetchSearchListings } from "../../../../store/listingsReducer";
import DropDown from "../DropDown";
import { SearchContext } from "../../IndexSearchInput";

import "./HomeListingType.scss";

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

    dispatch(fetchSearchListings("foo", "bar"));
  }

  return (
    <DropDown buttonValue={"For " + selectedOption}>
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
          // Clean up search word for request
          name="Rent"
          value="For Rent"
          onChange={handleOnChangeRadioBtn}
          checked={selectedOption === "Rent"}
        />
        <span>For Rent</span>
      </div>

      <input type="submit" value="Apply" className="submit-btn" />
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
