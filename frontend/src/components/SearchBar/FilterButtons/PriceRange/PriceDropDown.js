import "./PriceDropDown.scss";

const PriceDropDown = ({
  rangeFlag,
  rangeMarker,
  setMaxValueOnClick = null,
}) => {
  // Get rid of the , in rangeMarker sting the represents a price for the other input
  rangeMarker = rangeMarker.split(",").join("");

  const priceRange = [
    0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
    1000000, 1200000, 1300000,
  ];

  function generateMax() {
    return priceRange.filter((price) => price > rangeMarker);
  }

  function generateMin() {
    const range = [];

    for (let i = 0; i < priceRange.length; i++) {
      if (priceRange[i] < rangeMarker) {
        range.push(priceRange[i]);
      }
    }

    return range;
  }

  // Takes string with digits and return comma separated number in string format
  function parsePrice(number) {
    return parseInt(number).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (setMaxValueOnClick) {
      setMaxValueOnClick(true);
    }
  }

  return (
    <ul className="price-listPriceDropDown" onClick={handleClick}>
      {rangeFlag === "min"
        ? generateMin().map((price, i) => {
            return <li key={i}>${parsePrice(price)}</li>;
          })
        : null}
      {rangeFlag === "max"
        ? generateMax().map((price, i) => {
            return <li key={i}>${parsePrice(price)}</li>;
          })
        : null}
    </ul>
  );
};

export default PriceDropDown;
