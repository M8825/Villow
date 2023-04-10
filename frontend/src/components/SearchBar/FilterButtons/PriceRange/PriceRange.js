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
    if (minValue.length > 3) {
      setMinRangeDropdown(false);
    }

    if (
      minValue.length < 3 &&
      minValue.length > 1 &&
      minRangeDropdown === false
    ) {
      setMinRangeDropdown(true);
    }
    if (maxValue.length > 3) {
      setMaxRangeDropdown(false);
    }

    if (
      maxValue.length < 3 &&
      maxValue.length > 1 &&
      maxRangeDropdown === false
    ) {
      setMaxRangeDropdown(true);
    }

    // eslint-disable-next-line
  }, [minValue, maxValue, setMinRangeDropdown, setMaxRangeDropdown]);

  function handleClickMin(e) {
    e.preventDefault();
    setMinRangeDropdown(true);
  }

  function handleClickMax(e) {
    e.preventDefault();
    setMaxRangeDropdown(true);
  }

  return (
    <>
      <DropDown
        buttonValue={"Price"}
        onClose={{ setMinRangeDropdown, setMaxRangeDropdown }}
      >
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
              <Input
                value={minValue}
                setValue={setMinValue}
                rangeDropdown={minRangeDropdown}
              />
            </label>
            {minRangeDropdown && <PriceDropDown setPrice={setMinValue} />}
          </div>

          <span className="line"></span>

          <div className="input-dropbox-wrapper">
            <label
              htmlFor="max"
              className="price-range-lbl"
              onClick={handleClickMax}
            >
              <span>Maximum</span>
              <Input
                value={maxValue}
                setValue={setMaxValue}
                rangeDropdown={maxRangeDropdown}
              />
            </label>
            {maxRangeDropdown && <PriceDropDown setPrice={setMaxValue} />}
          </div>
        </div>
      </DropDown>
    </>
  );
};

export default PriceRange;
