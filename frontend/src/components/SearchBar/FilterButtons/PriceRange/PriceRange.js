import { useEffect, useState } from "react";
import DropDown from "../DropDown";
import Input from "./Input";
import PriceDropDown from "./PriceDropDown";

import "./PriceRange.scss";

const PriceRange = () => {
  const [minValue, setMinValue] = useState(undefined);
  const [maxValue, setMaxValue] = useState(undefined);
  const [maxValueOnClick, setMaxValueOnClick] = useState(false);
  const [minRangeDropdown, setMinRangeDropdown] = useState(false);
  const [maxRangeDropdown, setMaxRangeDropdown] = useState(false);

  useEffect(() => {
    if (minValue) {
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
    }

    if (maxValue) {
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
        maxValue={maxValueOnClick}
      >
        <div className="title">
          <p>Price Range</p>
        </div>
        <div className="price-range-labels-container">
          <div className="input-dropbox-wrapper">
            <label htmlFor="min" className="price-range-lbl">
              <span>Minimun</span>
              <Input
                value={minValue ? minValue : ""}
                setValue={setMinValue}
                clickLable={handleClickMin}
              />
            </label>
            {minRangeDropdown && (
              <PriceDropDown
                setPrice={setMinValue}
                rangeFlag="min"
                rangeMarker={maxValue ? maxValue : 1000000}
              />
            )}
          </div>

          <span className="line"></span>

          <div className="input-dropbox-wrapper">
            <label htmlFor="max" className="price-range-lbl">
              <span>Maximum</span>
              <Input
                value={maxValue ? maxValue : ""}
                setValue={setMaxValue}
                clickLable={handleClickMax}
                setMaxValueOnClick={setMaxValueOnClick}
              />
            </label>
            {maxRangeDropdown && (
              <PriceDropDown
                setPrice={setMaxValue}
                rangeFlag="max"
                rangeMarker={minValue ? minValue : 0}
                setMaxValueOnClick={setMaxValueOnClick}
              />
            )}
          </div>
        </div>
      </DropDown>
    </>
  );
};

export default PriceRange;
