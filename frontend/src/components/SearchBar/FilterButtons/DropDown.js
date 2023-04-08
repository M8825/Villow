import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import "./DropDown.scss";

const DropDown = (props) => {
  const { children, buttonValue, handleSubmit, filterBtnStyle, containerWidth } = props;
  const buttonRef = useRef();
  const contentRef = useRef(null);

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
        setDropDown(false);
      }
    };

    if (dropDown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropDown]);

  function onForSaleButtonClick(e) {
    if (e.currentTarget === buttonRef.current) {
      setDropDown(!dropDown);
    }
  }

  return (
    <div className="home-listing-type-wrapper">
      <button
        className={`filter-btn ${buttonValue ? "selected" : ""}`}
        style={{ width: buttonValue !== "For Sale" ? "140px" : "auto" }} // Every button has 140px width except "For Sale" button
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
          onClick={(e) => e.stopPropagation()}
        >
          <form
            ref={contentRef}
            className="dropdown-form"
            onSubmit={(e) => handleSubmit(e, setDropDown)}
          >
            {children}
          </form>
        </div>
      )}
    </div>
  );
};

export default DropDown;
