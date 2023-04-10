import { useEffect, useState } from "react";
import DropDown from "../DropDown";
import Input from "./Input";
import PriceDropDown from "./PriceDropDown";

import "./PriceRange.scss";

const PriceRange = () => {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [minRangeDropdown, setMinRangeDropdown] = useState(false);
  const [maxRangeDropdown, setMaxRangeDropdown] = useState(false);

  useEffect(() => {
    if(minValue.length > 3) {
      setMinRangeDropdown(prev => !prev);
    }

    if(minValue.length < 3 && minValue.length > 1 && minRangeDropdown === false) {
      setMinRangeDropdown(true);
    }
  }, [minValue, maxValue]);

  function handleClickMin(e) {
    e.preventDefault();
    setMinRangeDropdown((prev) => {
      return !prev;
    });
  }

  function handleClickMax(e) {
    e.preventDefault();
    setMaxRangeDropdown(true);
  }

  return (
    <>
      <DropDown buttonValue={"Price"}>
        <div className="title">
          <p>Price Range</p>
        </div>
        <div className="price-range-labels-container">
          <div className="input-dropbox-wrapper">
            <label
              htmlFor="min"
              className="price-range-lbl"
              onClick={handleClickMin}
            >
              <span>Minimun</span>
              <Input value={minValue} setValue={setMinValue} rangeDropdown={minRangeDropdown}/>
            </label>
            {minRangeDropdown && minValue.length <= 3 ? (
              <PriceDropDown setPrice={setMinValue} />
            ) : null}
          </div>

          <span className="line"></span>

          <label
            htmlFor="max"
            className="price-range-lbl"
            onClick={handleClickMax}
          >
            <span>Maximum</span>
            <Input />
          </label>
        </div>
      </DropDown>
    </>
  );
};

export default PriceRange;
