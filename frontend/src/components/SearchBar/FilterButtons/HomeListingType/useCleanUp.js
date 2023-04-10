import { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../../IndexSearchInput";

// Custom hook invoked in ListingType component
export function useCleanUp() {
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

  return {
    searchWord,
    term,
    dropDown,
    setDropDown,
    selectedOption,
    setSelectedOption,
    buttonRef,
  };
}
