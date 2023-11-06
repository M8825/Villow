import Listings from "../ListingsIndex/Listings";
import SearchBar from "../SearchBar/SearchBar";

import useLockBodyScroll from "./useLockScroll";
import Map from "../Map/map";
import "./IndexPage.scss";

const IndexPage = () => {
  useLockBodyScroll();

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <SearchBar />
      <div className="index-page-content-container">

        <div style={{ width: "100%", height: "100%", backgroundColor: "green" }}>
          <Map />
        </div>

        <Listings />

      </div>
    </div>
  );
};

export default IndexPage;
