import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getLocalStorageSearchCredentials } from "../../store/utils";
import Listings from "../ListingsIndex/Listings";
import SearchBar from "../SearchBar/SearchBar";
import { setInitialSearchingData } from "../../store/searchFilters";

import "./IndexPage.scss";

const IndexPage = () => {
  const dispatch = useDispatch();

  // TODO-next: move it to app level
  useEffect(() => {
    const localStorageData = getLocalStorageSearchCredentials();

    debugger
    dispatch(setInitialSearchingData(localStorageData));
  }, []);

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
