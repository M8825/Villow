// import foobar from "./components/TextFeature/foobar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/header/Navigation";
import ListingIndex from "./components/listing/";

const App = () => (
	<Router>
		<>
			<Switch>
				<Route exact path="/" render={() => {
					return (
						<>
							<Nav />
							<ListingIndex header={"Homes For You in New York, NY"} paragraph={"Based on your view history"}/>
						</>
					);
				}} />
			</Switch>
		</>
	</Router>
);

export default App;
