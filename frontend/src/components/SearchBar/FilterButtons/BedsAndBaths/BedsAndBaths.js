import { useSelector } from "react-redux";

import DropDown from "../DropDown";
import Squares from "./Squares";

import "./BedsAndBaths.scss";
import { getNumberOfBedrooms } from "../../../../store/searchFilters";

const BedsAndBaths = () => {
  const numberOfBedrooms = useSelector(getNumberOfBedrooms());


  return numberOfBedrooms && (
    <DropDown buttonValue="Beds & Baths">
      <h6 className="title">Number of Bedrooms</h6>

      <div className="beds-and-baths">
        <label>
          <legend>Bedrooms</legend>
          <Squares squareNumber={numberOfBedrooms}/>
        </label>
      </div>
    </DropDown>
  );
};

export default BedsAndBaths;
