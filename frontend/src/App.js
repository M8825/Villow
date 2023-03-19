import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/header/Navigation";
import ListingIndex from "./components/listing/";
import Layout from "./components/cards";
import Footer from "./components/footer";
import ShowListing from "./components/showListing";

import "./index.scss";
import Map from "./components/map/map";
import ListingsPage from "./components/ListingsIndex/ListingsIndex";

import CreateListing from "./components/TestFeature/foobar";
import SplashPage from "./components/Splash/SplashPage";

const App = () => {
	return (

		<Switch>
			<Route exec path="/listings/new" component={CreateListing} />
			<Route
				exec
				path="/listings/:listingId/edit"
				component={CreateListing}
			/>
			<Route exact path="/" component={SplashPage} />

			<Route exact path="/listings">
				<Nav isIndex={true} />
				{/* TODO: search_bar */}
				<div
					style={{ height: "55px", border: "1px solid black" }}
				></div>
				<div style={{ display: "flex" }}>
					<Map />
					<ListingsPage />
				</div>
			</Route>
			<Route path="/listings/:listingId/edit" component={CreateListing} />
			<Route exact path="/listings/new" component={CreateListing} />
			<Route exact path="/listings/:listingId" component={ShowListing} />
		</Switch>
	);
};

export default App;
