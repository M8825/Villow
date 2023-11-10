import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import DropDown from "../DropDown";
import Squares from "./Squares";

import {
  getNumberOfBathrooms,
  getNumberOfBedrooms,
  setBathroom,
  setBedroom,
} from "../../../../store/searchFilters";

import "./BedsAndBaths.scss";

const BedsAndBaths = () => {
  const numberOfBedrooms = useSelector(getNumberOfBedrooms()) || "0";
  const numberOfBathrooms = useSelector(getNumberOfBathrooms()) || "0";

  const [selectedButton, setSelectedButton] = useState(false);

  useEffect(() => {
    if (numberOfBedrooms !== "0" || numberOfBathrooms !== "0") {
      setSelectedButton(true);
    }

    return () => {
      setSelectedButton(false);
    };
  }, [numberOfBedrooms, numberOfBathrooms]);

  return (
    <DropDown
      selectedButton={selectedButton}
      buttonValue={
        numberOfBedrooms === "0" && numberOfBathrooms === "0"
          ? "Beds & Baths"
          : `${numberOfBedrooms}+ bd, ${numberOfBathrooms}+ ba`
      }
    >
      <h6 className="title">Number of Bedrooms</h6>

      <div className="beds-and-baths">
        <label>
          <legend>Bedrooms</legend>
          <Squares
            squareType={"bedroom"}
            squareNumber={numberOfBedrooms}
            setNumber={setBedroom}
          />
        </label>
      </div>

      <h6 className="title">Number of Bathrooms</h6>

      <div className="beds-and-baths">
        <label>
          <legend>Bathrooms</legend>
          <Squares
            squareType={"bathroom"}
            squareNumber={numberOfBathrooms}
            setNumber={setBathroom}
          />
        </label>
      </div>
    </DropDown>
  );
};

export default BedsAndBaths;
