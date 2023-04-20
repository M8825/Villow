import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import DropDown from "../DropDown";
import CheckMarks from "./CheckMarks";

import "./HomeType.scss";

const HomeType = () => {
  const [deselctAll, setDeselctAll] = useState("Deselect All");
  const [homeTypes, setHomeTypes] = useState({
    houses: true,
    coop: true,
    apartment: true,
    townhome: true,
    multiFamily: true,
    land: true,
  });

  function handleDeselectClick(e) {
    e.preventDefault();
    e.stopPropagation();

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
        {[
          "Houses",
          "Co-op",
          "Apartment",
          "Townhome",
          "Multi-Family",
          "Land",
        ].map((homeType, i) => {
          return <CheckMarks key={i} homeType={homeType} />;
        })}
      </div>
    </DropDown>
  );
};

export default HomeType;
