import { useState } from "react";

import Navigation from "../Header/Navigation";
import GrabAddress from "./GrabAddress";
import LandingPage from "./LandingPage";

import "./CreateListing.scss";

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
			<Navigation isIndex={true} />
			{page}
		</>
	);
};

export default CreateListing;
