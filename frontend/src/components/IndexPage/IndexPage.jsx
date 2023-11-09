import Listings from "../ListingsIndex/Listings";
import SearchBar from "../SearchBar/SearchBar";

import useLockBodyScroll from "./useLockScroll";
import Map from "../Map/map";
import "./IndexPage.scss";

const IndexPage = () => {
  useLockBodyScroll();

  return (
    <div className="index-page-container">
      <SearchBar />
      <div className="index-page-content-container">
        <div className="map-wrapper">
          <Map />
        </div>
        <Listings />
      </div>
    </div>
  );
};

export default IndexPage;
