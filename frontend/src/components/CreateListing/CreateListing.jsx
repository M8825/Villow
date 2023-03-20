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
				setPage(mapConfirmation())
				break;

			default:
				break;
		}
	};

	const landingPage = () => (
		<LandingPage handlePostListing={handlePostListing} />
	);

	const mapConfirmation = () => <GrabAddress handlePostListing={handlePostListing} />;

	const listingForm = () => <ListingForm handlePostListing={handlePostListing} />;

	const [page, setPage] = useState(landingPage());

	return (
		<>
			<Navigation isIndex={true} />
			{page}
			<Footer />
		</>
	);
};

export default CreateListing;
