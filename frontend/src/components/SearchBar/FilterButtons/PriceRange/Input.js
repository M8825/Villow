import { useState, useRef, useEffect } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { parsePrice } from "../../../utils/utils";

import "./Input.scss";
import { digitsMatcher } from "../../searchUtils";

const Input = ({
  value,
  setValue,
  clickLable,
  setMaxValueOnClick = null,
  placeholder,
}) => {
  const inputContainerRef = useRef();
  const inputRef = useRef();

  const [focused, setFocused] = useState({ isFocused: false });

  useEffect(() => {
    function handleOutside(e) {
      if (inputContainerRef.current !== e.target) {
        const inputWrapper = document.getElementsByClassName("focused")[0];

        if (inputWrapper) {
          inputWrapper.classList.remove("focused");
        }

        setFocused({ isFocused: false });
      }
    }

    if (focused) {
      const dropDownElement = document.getElementById("drpdwn");

      dropDownElement.addEventListener("click", handleOutside);
    }

    return () => {
      const dropDownElement = document.getElementById("drpdwn");

      if (dropDownElement) {
        dropDownElement.removeEventListener("click", handleOutside);
      }
    };
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
    const deleteCommas = e.target.value.split(',').join('')

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
      <FontAwesomeIcon icon={focused.isFocused ? faAngleUp : faAngleDown} />
    </div>
  );
};

export default Input;
