import { useState } from "react";
import Footer from "../Footer";
import Navigation from "../Header/Navigation";
import ListingForm from "../ListingForm/ListingForm";
import GrabAddress from "./GrabAddress";

import "./CreateListing.scss";
import LandingPage from "./LandingPage";

const CreateListing = () => {
	const handlePostListing = (e, last) => {
		e.preventDefault();

		switch (last) {
			case "LandingPage":
				setPage(mapConfirmation());
				break;

			default:
				break;
		}
	};
	const mapConfirmation = () => (
		<GrabAddress handlePostListing={handlePostListing} />
	);
	const landingPage = () => (
		<LandingPage handlePostListing={handlePostListing} />
	);
	const [page, setPage] = useState(landingPage());

	return (
		<>
			<ListingForm
				resultAddress={{
					streetAddress: "514 E 82ND ST. APT# 2R",
					unit: "2R",
					city: "New York",
					state: "NY",
					zipcode: "10028",
				}}
				coordinates={{
					lat: 40.7728549,
					lng: -73.9481746,
				}}
			/>
			{/* <Navigation isIndex={true} />
			{page}
			<Footer /> */}
		</>
	);
};

export default CreateListing;
