import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import DropDown from "../DropDown";

import "./HomeType.scss";

const HomeType = () => {
  const [deselctAll, setDeselctAll] = useState("Deselect All");

  function handleDeselectClick(e) {
    e.preventDefault();

    if (deselctAll === "Deselect All") {
      setDeselctAll("Select All");
    } else {
      setDeselctAll("Deselect All");
    }
  }

  return (
    <DropDown buttonValue={"Home Type"} selectedButton={true}>
      <div className="home-type-container">
        <div className="deselect-all-title-container">
          <h6>Home Type</h6>

          <div className="deselect-btn-container" onClick={handleDeselectClick}>
            <button className="deselect-btn">
              <FontAwesomeIcon icon={faCheck} className="icon" />
            </button>
            <h6 className="deselect-text">{deselctAll}</h6>
          </div>
        </div>
      </div>
    </DropDown>
  );
};

export default HomeType;
