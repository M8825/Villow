import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import "./DropDown.scss";

const DropDown = (props) => {
  const {
    children,
    buttonValue,
    containerWidth,
    maxValue,
    onClose,
  } = props;
  const buttonRef = useRef();

  const [dropDown, setDropDown] = useState(false);
  const [dropDownWidth, setDropDownWidth] = useState("auto");

  useEffect(() => {
    setDropDownWidth(containerWidth);
  }, [dropDown, children]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropDown &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        // Close button main dropdown window
        setDropDown(false);

        // Close inner price range dropdown windows in children
        const { setMinRangeDropdown, setMaxRangeDropdown } = onClose;

        setMinRangeDropdown(false);
        setMaxRangeDropdown(false);
      }
    };

    if (dropDown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropDown]);

  // Close dropdown if in PriceRange user sets Max Price for listing
  useEffect(() => {
    if (maxValue) {
      setDropDown(false);
    }
  }, [maxValue]);

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
    <div className="home-listing-type-wrapper" id="dropdown-wrapper">
      <button
        className={`filter-btn ${buttonValue ? "selected" : ""}`}
        style={{
          width:
            buttonValue !== "For Sale" && buttonValue !== "For Rent"
              ? "140px"
              : "auto",
        }} // Every button has 140px width except "For Sale" button
        ref={buttonRef}
        onClick={onForSaleButtonClick}
      >
        <span>{buttonValue}</span>
        <FontAwesomeIcon icon={dropDown ? faAngleUp : faAngleDown} />
      </button>
      {dropDown && (
        <div
          style={{ width: dropDownWidth, display: "inline-block" }}
          className="dropdown"
          id="drpdwn"
          onClick={(e) => e.stopPropagation()}
        >
          <form
            className={
              "" + buttonValue === "For Sale" || buttonValue === "For Rent"
                ? "listing-type-dropdown-form"
                : "non-listing_type-dropdown-form"
            }
            key={dropDown}
            onSubmit={handleSubmit}
          >
            {children}
          </form>
        </div>
      )}
    </div>
  );
};

export default DropDown;
