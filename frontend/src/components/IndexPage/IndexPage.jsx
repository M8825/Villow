import Map from "../Map/Map";
import ListingsPage from "../ListingsIndex/ListingsIndex";
import SearchBar from "../SearchBar/SearchBar";

import "./IndexPage.scss";

const IndexPage = () => {
	return (
		<>
			<SearchBar />
			<div className="index-page-container">
        <div style={{ width: "50vw", height: "100vh"}} >
          MAP COMMING

          </div>
				<ListingsPage />
			</div>
		</>
	);
};

export default IndexPage;
