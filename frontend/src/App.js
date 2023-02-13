// import foobar from "./components/TextFeature/foobar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/header/Navigation";
import ListingIndex from "./components/listing/";
import Layout from "./components/cards";
import Footer  from "./components/footer";
import "./index.scss"

const App = () => (
	<Router>
		<>
			<Switch>
				<Route exact path="/" render={() => {
					return (
						<>
							<Nav />
							<ListingIndex header={"Homes For You in New York, NY"} paragraph={"Based on your view history"}/>
							<Layout />
							<ListingIndex header={"Trending Homes in New York, NY"} paragraph={"Popular listings in the area"}/>
							<ListingIndex header={"Selling Soon Homes in New York, NY"} paragraph={"Likely to sell faster than 80% of homes nearby"}/>
							<Footer />
						</>
					);
				}} />
			</Switch>
		</>
	</Router>
);

export default App;
