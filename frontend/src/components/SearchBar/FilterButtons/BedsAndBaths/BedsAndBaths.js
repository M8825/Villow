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

const BedsAndBaths = () => {
  const numberOfBedrooms = useSelector(getNumberOfBedrooms());
  const numberOfBathrooms = useSelector(getNumberOfBathrooms());

  return (
    numberOfBedrooms && (
      <DropDown buttonValue="Beds & Baths">
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
