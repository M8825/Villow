// import foobar from "./components/TextFeature/foobar";
import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory,
} from "react-router-dom";
import Nav from "./components/header/Navigation";
import ListingIndex from "./components/listing/";
import Layout from "./components/cards";
import Footer from "./components/footer";
import ShowListing from "./components/showListing";

import "./index.scss";
import Foobar from "./components/TestFeature/foobar";
import ListingsPage from "./components/ListingsIndex";

const App = () => {
	// const history = useHistory();

	// const [isModalOpen, setIsModalOpen] = useState(true);

	// const handleOpenModal = () => {
	// 	setIsModalOpen(true);
	// 	history.push("/listing/listingId");
	// };

	// const handleCloseModal = () => {
	// 	setIsModalOpen(false);
	// 	history.push("/listing");
	// };

	// <Foobar />;
	return (
		<Router>
			<Switch>
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
									header={
										"Selling Soon Homes in New York, NY"
									}
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
					<div
					style={{ height: "55px", backgroundColor: "coral"}}
					>

					</div>
					<div style={{ display: "flex" }}>
						<Foobar />
						<ListingsPage />
					</div>
				</Route>
				<Route
					exact
					path="/listings/:listingId"
					component={ShowListing}
				/>
			</Switch>
		</Router>
	);
	// <Router>
	// 	<>
	// {/* <Switch>
	// 	<Route exact path="/" render={() => {
	// 		return (
	// 			<>
	// 				<Nav />
	// 				<ListingIndex header={"Homes For You in New York, NY"} paragraph={"Based on your view history"}/>
	// 				<Layout />
	// 				<ListingIndex header={"Trending Homes in New York, NY"} paragraph={"Popular listings in the area"}/>
	// 				<ListingIndex header={"Selling Soon Homes in New York, NY"} paragraph={"Likely to sell faster than 80% of homes nearby"}/>
	// 				<Footer />
	// 			</>
	// 		);
	// 	}} />
	// 	<Route exact path="/listings/:listingId" component={ShowListing}
	// 	/>
	// </Switch> */}
	// 	</>
	// </Router>
};

export default App;
