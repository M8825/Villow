import Map from "../Map/Map";
import ListingsPage from "../ListingsIndex/ListingsIndex";
import SearchBar from "../SearchBar/SearchBar";

import "./IndexPage.scss";

const IndexPage = () => {
	return (
		<>
			<SearchBar />
			<div className="index-page-container">
				<Map />
				<ListingsPage />
			</div>
		</>
	);
};

export default IndexPage;
