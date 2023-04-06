import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "bootstrap";
import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchListings } from "../../../store/listingsReducer";
import { SearchContext } from "../IndexSearchInput";
import { cleanUpWord } from "../../utils/utils";
import DropDown from "./DropDown";

import "./HomeListingType.scss";

export const ListingType = () => {
  const dispatch = useDispatch();
  const buttonRef = useRef();
  const { searchWord, term } = useContext(SearchContext);

  const [dropDown, setDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // ["for-sale", "for-rent"

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
    const cleanSearchWord = cleanUpWord(searchWord, term);

    dispatch(
      fetchSearchListings(term, cleanSearchWord, {
        listing_type: listingType,
      })
    );
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
