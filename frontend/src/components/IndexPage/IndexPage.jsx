import SearchBar from "../SearchBar/SearchBar";
import Map from "../Map/Map";
import ListingsPage from "../ListingsIndex/ListingsIndex";

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
