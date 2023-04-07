import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { fetchSearchListings } from "../../../../store/listingsReducer";
import DropDown from "./DropDown";
import { useDropdown } from "./useCleanUp";

import "./HomeListingType.scss";
import { getLocalStorageSearchCredentials } from "../../getLocalStorageSearchCredentials";

function cleanUpSearchWord(SearchWord, term) {
  let cleanSearchWord = SearchWord;
  // Split in if condition to avoid error when searchWord is empty
  // or when searchWord is a street addrewss
  if (term === "city") {
    cleanSearchWord = SearchWord.split(",")[0]; // Grab City from "city, state"
  }
  return cleanSearchWord;
}

export const HomeListingType = () => {
  const dispatch = useDispatch();

  const {
    searchWord,
    term,
    dropDown,
    setDropDown,
    selectedOption,
    setSelectedOption,
    buttonRef,
  } = useDropdown();

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

      localStorageSearchWord = localStorageSearchWord.split(",")[0] // Grab only city form "City, State" string
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

  function onForSaleButtonClick(e) {
    if (e.currentTarget === buttonRef.current) {
      setDropDown(!dropDown);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDropDown(false);
  }

  return (
    <div className="home-listing-type-wrapper">
      <button
        className={`filter-btn ${selectedOption ? "selected" : ""}`}
        ref={buttonRef}
        onClick={onForSaleButtonClick}
      >
        <span>For {selectedOption}</span>
        <FontAwesomeIcon icon={dropDown ? faAngleUp : faAngleDown} />
      </button>

      {dropDown && (
        <DropDown handleSubmit={handleSubmit}>
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
      )}
    </div>
  );
};
