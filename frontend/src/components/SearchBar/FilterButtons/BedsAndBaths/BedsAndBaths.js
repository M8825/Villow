import DropDown from "../DropDown";
import Squares from "./Squares";

import "./BedsAndBaths.scss";

const BedsAndBaths = () => {
  return (
    <DropDown buttonValue="Beds & Baths">
      <h6 className="title">Number of Bedrooms</h6>

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
