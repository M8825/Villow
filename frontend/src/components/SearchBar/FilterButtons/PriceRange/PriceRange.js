import DropDown from "../DropDown";
import "./PriceRange.scss";

const PriceRange = () => {
  return (
    <>
      <DropDown buttonValue={"Price"} containerWidth={"393px"}>
        <div className="title">
          <p>Price Range</p>
        </div>
        <label forHtml="min">
          <span>Minimun</span>
          <input type="text" name="min" placeholder="No Min" />
        </label>
        <label forHtml>
          <span>Maximum</span>
          <input type="text" name="max" placeholder="No Max" />
        </label>
      </DropDown>
    </>
  );
};

export default PriceRange;
