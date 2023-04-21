import { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import DropDown from "../DropDown";
import CheckMarks from "./CheckMarks";

import { getExcludes, setExcludes } from "../../../../store/searchFilters";

import "./HomeType.scss";

const HOME_TYPES = [
  "Houses",
  "Co-op",
  "Apartment",
  "Townhome",
  "Multi-Family",
  "Land",
];

const HomeType = () => {
  const dispatch = useDispatch();

  const excludes = useSelector(getExcludes());

  const [excludeHomeType, setExcludeHomeType] = useState([]);

  useEffect(() => {
    if (excludes) {
      setExcludeHomeType(excludes);
    }
  }, [excludes]);

  const deselectAll = useMemo(() => {
    return excludeHomeType?.length === 0 ? "Deselect All" : "Select All";
  }, [excludeHomeType]);

  // Set localStorage and Update state with home types that will be
  // excluded from the search(db query)
  useEffect(() => {
    // If everything is excluded from the search, nothing is excluded
    // Basically it fetches listings without any home type constrains
    if (excludes && excludes !== excludeHomeType) {
      dispatch(setExcludes(excludeHomeType));
    }
  }, [excludeHomeType]);

  const handleDeselectClick = useCallback(
    (e) => {
      e.preventDefault();

      // When user clicks on "Deselect All" button, add all home types to
      // excludeHomeType array
      let excludes;
      if (deselectAll === "Deselect All") {
        excludes = [...HOME_TYPES];
      }
      dispatch(setExcludes(excludes || []));
    },
    [deselectAll]
  );

  const handleCheckMarkClick = useCallback((e) => {
    if (e.target.type === "checkbox" && !e.target.checked) {
      setExcludeHomeType((prev) => {
        return [...prev, e.target.name];
      });
    }

    if (e.target.checked) {
      setExcludeHomeType((prev) => {
        let indexOfCheckType = prev.indexOf(e.target.name);

        if (indexOfCheckType !== -1) {
          prev.splice(indexOfCheckType, 1);
        }

        return [...prev];
      });
    }
  }, []);

  return (
    <DropDown buttonValue={"Home Type"} selectedButton={true}>
      <div className="home-type-container" onClick={handleCheckMarkClick}>
        <div className="deselect-all-title-container">
          <h6>Home Type</h6>

          <div className="deselect-btn-container" onClick={handleDeselectClick}>
            <button className="deselect-btn">
              <FontAwesomeIcon icon={faCheck} className="icon" />
            </button>
            <h6 className="deselect-text">{deselectAll}</h6>
          </div>
        </div>
        {HOME_TYPES.map((homeType, i) => {
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
  );
};

export default HomeType;
