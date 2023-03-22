import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import ShowListing from "./components/ShowListing";
import { LoadScript } from "@react-google-maps/api";
import UserProfile from "./components/UserProfile/UserProfile";

import "./index.scss";

import SplashPage from "./components/Splash/SplashPage";
import IndexPage from "./components/IndexPage/IndexPage";
import CreateListing from "./components/CreateListing/CreateListing";

const App = () => {
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
