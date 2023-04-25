import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Header/Navigation";
import ShowListing from "./components/ShowListing";
import UserProfile from "./components/UserProfile/UserProfile";
import SplashPage from "./components/Splash/SplashPage";
import IndexPage from "./components/IndexPage/IndexPage";
import CreateListing from "./components/CreateListing/CreateListing";



import "./index.scss";
import { getLocalStorageSearchCredentials } from "./store/utils";
import { setInitialSearchingData } from "./store/searchFilters";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const localStorageData = getLocalStorageSearchCredentials();

  //   dispatch(setInitialSearchingData(localStorageData));
  // }, []);

	return (
			<Switch>
				<Route exec path="/listings/new" component={CreateListing} />
				<Route
					exec
					path="/listings/:listingId/edit"
					component={CreateListing}
				/>
				<Route exact path="/user/:id" component={UserProfile} />
				<Route exact path="/" component={SplashPage} />

				<Route exact path="/listings">
					<Navigation isIndex={true} />
					<IndexPage />
				</Route>
				<Route
					path="/listings/:listingId/edit"
				component={CreateListing}
				/>
				<Route exact path="/listings/new" component={CreateListing} />
				<Route
					exact
					path="/listings/:listingId"
					component={ShowListing}
				/>
			</Switch>
	);
};

export default App;
