import HomeListingType from "./HomeListingType/HomeListingType";
import BedsAndBaths from "./BedsAndBaths/BedsAndBaths";
import PriceRange from "./PriceRange/PriceRange";
import HomeType from "./HomeType/HomeType";

const FilterButtons = () => {
	return (
		<>
			<HomeListingType />
			<PriceRange />
			<BedsAndBaths />
			<HomeType />
		</>
	);
};

export default FilterButtons;
