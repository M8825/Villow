import Listings from "../ListingsIndex/Listings";
import SearchBar from "../SearchBar/SearchBar";

import useLockBodyScroll from "./useLockScroll";
import "./IndexPage.scss";

const IndexPage = () => {
  useLockBodyScroll();

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <SearchBar />
      <div className="index-page-content-container">
        <div style={{ width: "100%", backgroundColor: "green" }}>
          MAP COMMING
        </div>
        <Listings />
      </div>
    </div>
  );
};

export default IndexPage;
