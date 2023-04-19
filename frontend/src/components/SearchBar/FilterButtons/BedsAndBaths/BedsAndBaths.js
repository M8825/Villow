import DropDown from "../DropDown";
import Squares from "./Squares";

import "./BedsAndBaths.scss";
const BedsAndBaths = () => {
  return (
    <DropDown buttonValue="Beds & Baths">
        <div className="title">
          <p>Number of Bedrooms</p>
        </div>
      <div className="beds-and-baths">
        <label>
          <legend>Bedrooms</legend>
          <Squares />
        </label>
      </div>
    </DropDown>
  );
};

export default BedsAndBaths;
