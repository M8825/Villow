import "./HomeListingType.scss";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export const HomeListingType = () => {
  const [dropDown, setDropDown] = useState(false);
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setDropDown(false);
      }
    };

    if (dropDown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  });

  const onButtonClick = (e) => {
    if (e.currentTarget === buttonRef.current) {
      setDropDown(!dropDown);
    }
  };

  return (
    <div className="home-listing-type-wrapper">
      <button className="filter-btn" ref={buttonRef} onClick={onButtonClick}>
        <span>For Sale</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      {dropDown && (
        <div className="dropdown" onClick={(e) => e.stopPropagation()}>
          <lable htmlFor="for-sale">
            <input type="checkbox" id="for-sale" />
            <span>For Sale</span>
          </lable>
        </div>
      )}
    </div>
  );
};
