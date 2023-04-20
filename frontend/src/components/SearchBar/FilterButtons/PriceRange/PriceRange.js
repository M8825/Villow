import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPrice } from "../../../../store/searchFilters";
import DropDown from "../DropDown";
import Input from "./Input";
import PriceDropDown from "./PriceDropDown";

import "./PriceRange.scss";

const PriceRange = () => {
  const localStorageMinPrice = useSelector(getPrice("No Min"));
  const localStorageMaxPrice = useSelector(getPrice("No Max"));

  const [maxValue, setMaxValue] = useState(localStorageMaxPrice || "");
  const [minValue, setMinValue] = useState(localStorageMinPrice || "");

  const [minFocused, setMinFocused] = useState({ isFocused: false });
  const [maxFocused, setMaxFocused] = useState({ isFocused: false });

  const [selectedButton, setSelectedButton] = useState(false);

  useEffect(() => {
    if (minValue !== "" || maxValue !== "") {
      setSelectedButton(true);
    }
  }, [minValue, maxValue]);

  useEffect(() => {
    if (localStorageMaxPrice) {
      setMaxValue(localStorageMaxPrice);
    }

    if (localStorageMinPrice) {
      setMinValue(localStorageMinPrice);
    }
  }, [localStorageMaxPrice, localStorageMinPrice]);

  const [minRangeDropdown, setMinRangeDropdown] = useState(false);
  const [maxRangeDropdown, setMaxRangeDropdown] = useState(false);

  // Indicator to close price range dropdown when user select
  // maximum price option
  const [maxValueOnClick, setMaxValueOnClick] = useState(false);

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

  function getMinPriceLabel() {
    if (minValue && minValue !== "") {
      return `$${minValue.split(",")[0]}K` + (maxValue ? "-" : "+");
    } else {
      if (maxValue !== "") {
        return "Up to ";
      }
    }
  }

  function getMaxPriceLabel() {
    if (maxValue && maxValue !== "") {
      return "$" + maxValue.split(",")[0] + "K";
    } else {
      return "";
    }
  }

  return (
    <>
      <DropDown
        buttonValue={
          minValue !== "" || maxValue !== ""
            ? getMinPriceLabel() + getMaxPriceLabel()
            : "Price Range"
        }
        onClose={{ setMinRangeDropdown, setMaxRangeDropdown }}
        minValue={minValue}
        maxValue={maxValue}
        maxValueOnClick={maxValueOnClick}
        setMinFocused={setMinFocused}
        setMaxFocused={setMaxFocused}
        selectedButton={selectedButton}
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
                placeholder="No Min"
                focused={minFocused}
                setFocused={setMinFocused}
                rangeDropdown={setMinRangeDropdown}
              />
            </label>
            {minRangeDropdown && (
              <PriceDropDown
                setPrice={setMinValue}
                rangeFlag="min"
                rangeMarker={maxValue ? maxValue : "1000000"}
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
                placeholder="No Max"
                setMaxValueOnClick={setMaxValueOnClick}
                focused={maxFocused}
                setFocused={setMaxFocused}
                rangeDropdown={setMaxRangeDropdown}
              />
            </label>
            {maxRangeDropdown && (
              <PriceDropDown
                setPrice={setMaxValue}
                rangeFlag="max"
                rangeMarker={minValue ? minValue : "0"}
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
