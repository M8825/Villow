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
import SearchBar from "./components/SearchBar/SearchBar";

import CreateListing from "./components/TestFeature/foobar";
import SplashPage from "./components/Splash/SplashPage";
import IndexPage from "./components/IndexPage/IndexPage";

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
				<IndexPage />
			</Route>
			<Route path="/listings/:listingId/edit" component={CreateListing} />
			<Route exact path="/listings/new" component={CreateListing} />
			<Route exact path="/listings/:listingId" component={ShowListing} />
		</Switch>
	);
};

export default App;
