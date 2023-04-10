import "./PriceDropDown.scss"

const PriceDropDown = ({ setPrice }) => {

  function handleClick(e) {
    e.preventDefault();

    setPrice(e.target.textContent)
  }

  return (
      <ul className="price-listPriceDropDown" onClick={handleClick}>
        <li>$0</li>
        <li>$100,000</li>
        <li>$300,000</li>
        <li>$200,000</li>
        <li>$400,000</li>
        <li>$500,000</li>
      </ul>
  );
};

export default PriceDropDown;
