import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPrice, setPrice } from "../../../store/searchFilters";

export const useDropdown = (
  containerWidth,
  minValue,
  maxValue,
  maxValueOnClick,
  onClose
) => {
  const dispatch = useDispatch();
  const buttonRef = useRef();

  const minValueRef = useRef(minValue);
  const maxValueRef = useRef(maxValue);

  const [dropDown, setDropDown] = useState(false);
  const [dropDownWidth, setDropDownWidth] = useState("auto");

  const stateMinPrice = useSelector(getPrice("No Min"));
  const stateMaxPrice = useSelector(getPrice("No Max"));

  useEffect(() => {
    setDropDownWidth(containerWidth);
  }, [dropDown]);

  useEffect(() => {
    minValueRef.current = minValue;
    maxValueRef.current = maxValue;
  }, [minValue, maxValue]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropDown &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        // Change input styling
        const priceInputWrapper = document.getElementsByClassName("focused")[0];

        if (priceInputWrapper) {
          priceInputWrapper.classList.remove("focused");
        }

        // Update state if input values have changed
        if (minValueRef.current && minValueRef.current !== stateMinPrice) {
          dispatch(setPrice("No Min", minValueRef.current)); // Dispatch to update store and localStorage
        }

        if (maxValueRef.current && maxValueRef.current !== stateMaxPrice) {
          dispatch(setPrice("No Max", maxValueRef.current)); // Dispatch to update store and localStorage
        }

        // Clean up
        // Close inner price range dropdown windows in children
        if (onClose) {
          const { setMinRangeDropdown, setMaxRangeDropdown } = onClose;

          setMinRangeDropdown(false);
          setMaxRangeDropdown(false);
        }

        document.removeEventListener("click", handleClickOutside);
        // Close active search filter button's dropdown window
        setDropDown(false);
      }
    };

    if (dropDown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropDown]);

  // Close dropdown if in PriceRange user sets Max Price for listing
  useEffect(() => {
    if (maxValueOnClick) {
      setDropDown(false);
    }
  }, [maxValueOnClick]);

  return { dropDown, setDropDown, dropDownWidth, buttonRef };
};
