import useLockBodyScroll from "./useLockScroll";

import SearchBar from "../SearchBar/SearchBar";
import Map from "../Map/map";

import Listings from "../ListingsIndex/Listings";

import "./IndexPage.scss";

const IndexPage = () => {
  useLockBodyScroll();

  return (
    <div className="index-page-container">
      <SearchBar />
      <div className="index-page-content-container">
        <Map />
        <Listings />
      </div>
    </div>
  );
};

export default IndexPage;
