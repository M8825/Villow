import DropDown from "../DropDown";

const PriceRange = () => {
  const filterBtnStyle = {
    width: "140px",
  }

	return (
		<>
      <DropDown buttonValue={"Price"} filterBtnStyle={filterBtnStyle}>
			<div>
				<h2>Price Range</h2>
			</div>
			<label>
				<input type="text" />
			</label>
      </DropDown >
		</>
	);
};

export default PriceRange;
