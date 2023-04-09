import { fabackgroundAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DropDown from "../DropDown";
import Input from "./Input";


import "./PriceRange.scss";

const PriceRange = () => {
  return (
    <>
      <DropDown buttonValue={"Price"} >
        <div className="title">
          <p>Price Range</p>
        </div>
        <div className="price-range-labels-container">
          <label forHtml="min" className="price-range-lbl">
            <span>Minimun</span>
            <Input />
          </label>
          <span className="line"></span>
          <label forHtml="max" className="price-range-lbl">
            <span>Maximum</span>
            <Input />
          </label>
        </div>
      </DropDown>
    </>
  );
};

export default PriceRange;
