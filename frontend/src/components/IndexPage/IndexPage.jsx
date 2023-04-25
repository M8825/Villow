import Listings from "../ListingsIndex/Listings";
import SearchBar from "../SearchBar/SearchBar";

import "./IndexPage.scss";

const IndexPage = () => {
  return (
    <>
      <SearchBar />
      <div className="index-page-container">
        <div style={{ width: "50vw", height: "100vh" }}>MAP COMMING</div>
        <Listings />
      </div>
    </>
  );
};

export default IndexPage;
