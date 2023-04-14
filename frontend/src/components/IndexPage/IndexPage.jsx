import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInitialSearchingData } from "../../store/search";
import { getLocalStorageSearchCredentials } from "../../store/utils";
import ListingsPage from "../ListingsIndex/ListingsIndex";
import SearchBar from "../SearchBar/SearchBar";

import "./IndexPage.scss";

const IndexPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const  localStorageData = getLocalStorageSearchCredentials();

    dispatch(setInitialSearchingData(localStorageData))

  }, [])
  
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
