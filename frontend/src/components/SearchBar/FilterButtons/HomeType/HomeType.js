import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import DropDown from "../DropDown";
import CheckMarks from "./CheckMarks";

import { getExcludes, setExcludes } from "../../../../store/searchFilters";

import "./HomeType.scss";

const HomeType = () => {
  const dispatch = useDispatch();

  const stateExcludeHomeType = useSelector(getExcludes());
  const [deselctAll, setDeselctAll] = useState("Deselect All");
  const [excludeHomeType, setExcludeHomeType] = useState([]);
  console.log("excludeHomeType: ", excludeHomeType);

  useEffect(() => {
    if (stateExcludeHomeType) {
      debugger
      setExcludeHomeType(stateExcludeHomeType);
    }   
  }, [stateExcludeHomeType]);

  // Set localStorage and Update state with home types that will be
  // excluded from the search(db query)
  useEffect(() => {
    // If everything is excluded from the search, nothing is excluded
    // Basically it fetches listings without any home type constrains
    if (stateExcludeHomeType !== excludeHomeType) {
      if (excludeHomeType && excludeHomeType.length !== 6) {
        dispatch(setExcludes(excludeHomeType));
      }     
    }
  }, [excludeHomeType]);

  function handleDeselectClick(e) {
    e.preventDefault();

    // When user clicks on "Deselect All" button, add all home types to
    // excludeHomeType array
    if (deselctAll === "Deselect All") {
      setDeselctAll("Select All");
      debugger
      setExcludeHomeType([
        "Houses",
        "Co-op",
        "Apartment",
        "Townhome",
        "Multi-Family",
        "Land",
      ]);
    } else {
      setDeselctAll("Deselect All");
      setExcludeHomeType([]);
    }
  }

  function handleCheckMarkClick(e) {
    if (deselctAll == "Deselect All" && !e.target.checked) {
      setDeselctAll("Select All");
    }

    if (e.target.type === "checkbox" && !e.target.checked) {
      setExcludeHomeType((prev) => {
        return [...prev, e.target.name];
      });
    }

    if (e.target.checked) {
      setExcludeHomeType((prev) => {
        let indexOfCheckType = prev.indexOf(e.target.name);

        if (indexOfCheckType !== -1) {
          prev.splice(indexOfCheckType, 1); // Delete first accurance of the home type from and array
        }

        return [...prev];
      });
    }
  }

  return (
    excludeHomeType && (
      <DropDown buttonValue={"Home Type"} selectedButton={true}>
        <div className="home-type-container" onClick={handleCheckMarkClick}>
          <div className="deselect-all-title-container">
            <h6>Home Type</h6>

            <div
              className="deselect-btn-container"
              onClick={handleDeselectClick}
            >
              <button className="deselect-btn">
                <FontAwesomeIcon icon={faCheck} className="icon" />
              </button>
              <h6 className="deselect-text">{deselctAll}</h6>
            </div>
          </div>
          {[
            "Houses",
            "Co-op",
            "Apartment",
            "Townhome",
            "Multi-Family",
            "Land",
          ].map((homeType, i) => {
            return (
              <CheckMarks
                key={i}
                homeType={homeType}
                defChecked={
                  excludeHomeType &&
                  (excludeHomeType.includes(homeType) ? false : true)
                }
              />
            );
          })}
        </div>
      </DropDown>
    )
  );
};

export default HomeType;
