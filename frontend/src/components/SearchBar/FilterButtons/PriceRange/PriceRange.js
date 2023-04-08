import DropDown from "../DropDown";
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
            <input type="text" name="min" placeholder="No Min" />
          </label>
          <span className="line"></span>
          <label forHtml className="price-range-lbl">
            <span>Maximum</span>
            <input type="text" name="max" placeholder="No Max" />
          </label>
        </div>
      </DropDown>
    </>
  );
};

export default PriceRange;
