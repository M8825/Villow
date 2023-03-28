import "./SearchBar.scss";

const SearchBar = () => {
	return (
		<input
			className="search_container__search_bar"
			type="text"
			placeholder="Enter an address, neighborhood, city, or ZIP code"
		/>
	);
};

export default SearchBar;
