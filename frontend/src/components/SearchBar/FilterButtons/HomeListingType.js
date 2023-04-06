import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchListings } from "../../../store/listingsReducer";
import { SearchContext } from "../IndexSearchInput";

import "./HomeListingType.scss";

function cleanUpWord(searchWord, term) {
  let cleanSearchWord = searchWord;

  // Split in if condition to avoid error when searchWord is empty
  // or when searchWord is a street address
  if (term === "city") {
    cleanSearchWord = searchWord.split(",")[0]; // Grab City from "city, state"
  }
  return cleanSearchWord;
}

export const ListingType = () => {
  const dispatch = useDispatch();
  const { searchWord, term } = useContext(SearchContext);

  const [dropDown, setDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // ["for-sale", "for-rent"
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropDown &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setDropDown(false);
      }
    };

    if (dropDown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropDown]);

  function onButtonClick(e) {
    if (e.currentTarget === buttonRef.current) {
      setDropDown(!dropDown);
    }
  }

  useEffect(() => {
    const storedListingType = localStorage.getItem("listingType");
    if (storedListingType) {
      setSelectedOption(storedListingType);
    } else {
      setSelectedOption("Sale");
    }
  }, []);

  const handleOnChangeRadioBtn = (e) => {
    e.stopPropagation();

    setSelectedOption(e.target.value);
    localStorage.setItem("listingType", e.target.value);

    const cleanSearchWord = cleanUpWord(searchWord, term);

    dispatch(
      fetchSearchListings(term, cleanSearchWord, {
        listing_type: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      fetchSearchListings(term, searchWord, { listing_type: selectedOption })
    );
  };

  return (
    <div className="home-listing-type-wrapper">
      <button className={`filter-btn ${selectedOption ? "selected" : ""}`} ref={buttonRef} onClick={onButtonClick}>
        <span>For Sale</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>

      {dropDown && (
        <div
          className="dropdown"
          onClick={(e) => e.stopPropagation()}
        >
          <form className="dropdown-form"  onSubmit={handleSubmit}>
            <div htmlFor="for-sale" className="lbl">
              <input
                type="radio"
                id="for-sale"
                name={"type"}
                value="Sale"
                checked={selectedOption === "Sale"}
                onChange={handleOnChangeRadioBtn}
              />
              <span>For Sale</span>
            </div>
            <div htmlFor="for-rent" className="lbl">
              <input
                type="radio"
                id="for-rent"
                name={"type"}
                value="Rent"
                onChange={handleOnChangeRadioBtn}
                checked={selectedOption === "Rent"}
              />
              <span>For Rent</span>
            </div>

            <input type="submit" value="Apply" />
          </form>
        </div>
      )}
    </div>
  );
};
