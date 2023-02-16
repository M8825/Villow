// import foobar from "./components/TextFeature/foobar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/header/Navigation";
import ListingIndex from "./components/listing/";
import Layout from "./components/cards";
import Footer from "./components/footer";
import ShowListing from "./components/showListing";
import { Link } from "react-router-dom";

import "./index.scss";
import Map from "./components/map/map";
import ListingsPage from "./components/ListingsIndex";

import CreateListing from "./components/TestFeature/foobar";

const App = () => {
	return (
		// <Switch>
		// </Switch>
		// <Router>
		<Switch>
			<Route exec path="/listings/new" component={CreateListing} />
			<Route
				exec
				path="/listings/:listingId/edit"
				component={CreateListing}
			/>
			<Route
				exact
				path="/"
				render={() => {
					return (
						<>
							<Nav />
							<ListingIndex
								header={"Homes For You in New York, NY"}
								paragraph={"Based on your view history"}
							/>
							<Layout />
							<ListingIndex
								header={"Trending Homes in New York, NY"}
								paragraph={"Popular listings in the area"}
							/>
							<ListingIndex
								header={"Selling Soon Homes in New York, NY"}
								paragraph={
									"Likely to sell faster than 80% of homes nearby"
								}
							/>
							<Footer />
						</>
					);
				}}
			/>
			<Route exact path="/listings">
				<Nav isIndex={true} />
				{/* TODO: search_bar */}
				<div style={{ height: "55px",  border: "1px solid black" }}></div>

				<Link
					to={`listings/${1}/edit`}
					style={{
						width: "100%",
						padding: "50px",
						backgroundColor: "blue",
						height: "40px",
						color: "white",
						fontWeight: "800",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						border: "1px solid black",
					}}
				>
					EDIT (Sorry for styling)
				</Link>
				<Link
					to={`listings/new`}
					style={{
						width: "100%",
						padding: "50px",
						backgroundColor: "blue",
						height: "40px",
						color: "white",
						fontWeight: "800",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						border: "1px solid black",
					}}
				>
					CREATE NEW (Sorry for styling)
				</Link>

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
