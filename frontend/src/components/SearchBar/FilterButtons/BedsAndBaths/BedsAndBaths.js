import { useSelector } from "react-redux";

import DropDown from "../DropDown";
import Squares from "./Squares";

import "./BedsAndBaths.scss";
import {
  getNumberOfBathrooms,
  getNumberOfBedrooms,
  setBathroom,
  setBedroom,
} from "../../../../store/searchFilters";
import { useEffect } from "react";
import { useState } from "react";

const BedsAndBaths = () => {
  const numberOfBedrooms = useSelector(getNumberOfBedrooms());
  const numberOfBathrooms = useSelector(getNumberOfBathrooms());

  const [selectedButton, setSelectedButton] = useState(false);

  useEffect(() => {
      if (numberOfBedrooms !== "0" || numberOfBathrooms !== "0") {
        setSelectedButton(true);
      }

    return () => {
      setSelectedButton(false);
    }
  }, [numberOfBedrooms, numberOfBathrooms]);

  return (
    numberOfBedrooms && (
      <DropDown
        selectedButton={selectedButton}
        buttonValue={
          numberOfBedrooms === "0" && numberOfBathrooms === "0"
            ? "Beds & Baths"
            : numberOfBedrooms + " +bd" + " " + numberOfBathrooms + " +ba"
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
    )
  );
};

export default BedsAndBaths;
