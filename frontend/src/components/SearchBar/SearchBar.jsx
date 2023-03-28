import "./SearchBar.scss";
import SearchIcon from "./SearchIcon";

const SearchBar = () => {
	return (
		<div
			className="search-container"
			onMouseEnter={(e) => {
                if (e.target.parentElement.className.split(" ").includes("search-container")) {
				    e.target.parentElement.classList.add("focused");
                }
			}}
			onMouseLeave={(e) => {
                if (e.target.parentElement.className.split(" ").includes("search-container")) {
				    e.target.parentElement.classList.remove("focused");
                }
			}}
		>
			<input
				className="search_container__search_bar"
				type="text"
				placeholder="Enter address, neighborhood, city, or ZIP code"
			/>
			<div className="search_container__search_button">
				<SearchIcon />
			</div>
		</div>
	);
};

export default SearchBar;
