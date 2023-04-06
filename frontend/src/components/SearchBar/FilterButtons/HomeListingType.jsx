import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchListings } from "../../../store/listingsReducer";
import { SearchContext } from "../IndexSearchInput";

import "./HomeListingType.scss";

export const ListingType = () => {
  const dispatch = useDispatch();
  const { searchWord, term } = useContext(SearchContext);
  console.log("HomeListingType", searchWord);

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
        console.log(dropDown);
        setDropDown(false);
      }
    };

    if (dropDown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropDown]);

  const onButtonClick = (e) => {
    if (e.currentTarget === buttonRef.current) {
      setDropDown(!dropDown);
    }
  };

  const handleOnChangeRadioBtn = (e) => {
    e.stopPropagation();

    setSelectedOption(e.target.value);

    let cleanSearchWord = searchWord;

    // Split in if condition to avoid error when searchWord is empty
    // or when searchWord is a street address
    if (term === "city") {
      cleanSearchWord = searchWord.split(",")[0]; // Grab City from "city, state"
    } else if ("state") {
      cleanSearchWord = searchWord.split(",")[1]; // Grab State form "city, state"
    }
  
    cleanSearchWord = cleanSearchWord.toString().trim();

    debugger
    dispatch(
      fetchSearchListings(term, cleanSearchWord, {
        listing_type: e.target.value,
      })
    );
  };

  return (
    <div className="home-listing-type-wrapper">
      <button className="filter-btn" ref={buttonRef} onClick={onButtonClick}>
        <span>For Sale</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>

      {dropDown && (
        <div className="dropdown" onClick={(e) => e.stopPropagation()}>
          <form className={"dropdown-form"}>
            <lable htmlFor="for-sale">
              <input
                type="radio"
                id="for-sale"
                name={"type"}
                value="Sale"
                onChange={handleOnChangeRadioBtn}
              />
              <span>For Sale</span>
            </lable>
            <lable htmlFor="for-rent">
              <input
                type="radio"
                id="for-rent"
                name={"type"}
                value="Rent"
                onChange={handleOnChangeRadioBtn}
              />
              <span>For Rent</span>
            </lable>

            <input type="submit" value="Apply" />
          </form>
        </div>
      )}
    </div>
  );
};
