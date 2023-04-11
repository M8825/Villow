import "./PriceDropDown.scss";

const PriceDropDown = ({ setPrice, rangeFlag, rangeMarker, setMaxValueOnClick }) => {
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

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    setPrice(e.target.textContent);
    setMaxValueOnClick(true)
  }

  return (
    <ul className="price-listPriceDropDown" onClick={handleClick}>
      {rangeFlag === "min"
        ? generateMin().map((price, i) => {
            return <li key={i}>{price}</li>;
          })
        : null}
      {rangeFlag === "max"
        ? generateMax().map((price, i) => {
            return <li key={i}>{price}</li>;
          })
        : null}
    </ul>
  );
};

export default PriceDropDown;
