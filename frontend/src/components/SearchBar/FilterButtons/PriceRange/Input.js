import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import { digitsMatcher } from "../../searchUtils";
import { parsePrice } from "../../../utils/utils";
import { getPrice, setPrice } from "../../../../store/searchFilters";

import "./Input.scss";

const Input = ({
  value,
  setValue,
  clickLable,
  setMaxValueOnClick = null,
  placeholder,
  focused,
  setFocused,
  rangeDropdown,
}) => {
  const dispatch = useDispatch();
  const filterPrice = useSelector(getPrice(placeholder));
  const inputContainerRef = useRef();
  const inputRef = useRef();
  const focusRef = useRef(focused);

  const priceValue = useRef(value);

  useEffect(() => {
    priceValue.current = value;
    focusRef.current = focused;
  }, [value, focused]);

  useEffect(() => {
    function handleOutside(e) {
      if (inputContainerRef.current !== e.target) {
        const inputWrapper = document.getElementsByClassName("focused")[0];

        if (inputWrapper) {
          inputWrapper.classList.remove("focused");
        }

        setFocused({ isFocused: false });
        rangeDropdown(false);

        // Check if user click on price dropdown
        if (e.target.offsetParent.className === "price-listPriceDropDown") {
          // Grab price from dropdown
          const dropdownPrice = e.target.innerText.slice(1);

          // Check if clicked price is different from current price
          // for relevant input in state. By relevant input I mean
          // it checks based on the placeholder value, which input
          // value is being changed - min or max.
          if (dropdownPrice !== filterPrice) {
            dispatch(setPrice(placeholder, dropdownPrice)); // Dispatch to update store and localStorage
          }
        } else {
          if (priceValue.current !== filterPrice) {
            dispatch(setPrice(placeholder, priceValue.current)); // Dispatch to update store and localStorage
          }
        }
      }
    }

    if (focusRef.current.isFocused) {
      const dropDownElement = document.getElementById("drpdwn");

      dropDownElement.addEventListener("click", handleOutside);
    }

    return () => {
      const dropDownElement = document.getElementById("drpdwn");

      if (dropDownElement) {
        dropDownElement.removeEventListener("click", handleOutside);
      }
    };
    // eslint-disable-next-line
  }, [focused]);

  function handleHover(e) {
    e.preventDefault();

    inputContainerRef.current.classList.add("hovered");
  }

  function handleLeave(e) {
    e.preventDefault();

    inputContainerRef.current.classList.remove("hovered");
  }

  function handleClick(e) {
    e.preventDefault();

    inputRef.current.focus();

    setFocused({ isFocused: true });

    inputContainerRef.current.classList.add("focused");
    clickLable(e);
    // Set max value value to false on each click at Maximum lable or
    // Maximum input. We need this to change prop for <PriceRangeDown >in PriceRange.js.
    // This way when user selects maximum price by clicking on displayed options, dorpdown
    // menu for maximum price close automatically.
    // Manually typing max price will not trigger fetch from database. We use apply button
    // for that functionality.
    if (setMaxValueOnClick) {
      setMaxValueOnClick(false);
    }
  }

  function handleOnChange(e) {
    e.preventDefault();
    // Clean input to check if user provided input with only digits
    const deleteCommas = e.target.value.split(",").join("");

    if (digitsMatcher(deleteCommas)) {
      if (e.target.value.length > 0) {
        const parsedNumber = parsePrice(e.target.value);
        setValue(parsedNumber);
      } else {
        setValue(e.target.value); // Set input value at onChange for empty string
      }
    }
  }

  return (
    <div
      ref={inputContainerRef}
      onClick={handleClick}
      className="input-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <input
        ref={inputRef}
        type="text"
        id="input"
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
      />
      <FontAwesomeIcon
        icon={focusRef.current.isFocused ? faAngleUp : faAngleDown}
      />
    </div>
  );
};

export default Input;
