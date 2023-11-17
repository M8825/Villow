import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDropdown } from "./useDropdown";

import "./DropDown.scss";

const DropDown = (props) => {
  const {
    children,
    buttonValue,
    containerWidth,
    minValue,
    maxValue,
    maxValueOnClick,
    selectedButton,
    onClose,
  } = props;

  // Custom hook
  const { dropDown, setDropDown, dropDownWidth, buttonRef } = useDropdown(
    containerWidth,
    minValue,
    maxValue,
    maxValueOnClick,
    onClose
  );

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
        className={`filter-btn ${selectedButton ? "selected" : ""}`}
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

            <div className="btn-container">
              <input type="submit" className="submit-btn" value="Apply" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DropDown;
