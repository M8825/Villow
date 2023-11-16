import React from "react";

import ModalContainer from "../Modal/ModalContainer";
import ListingHeader from "./ListingHeader";
import Gallery from "./gallery";
import Home from "./Home";

import "./style/index.scss";

const ShowListing = ({ listing, handleClickItem }) => {
	const modalAreaStyling = {
		display: "flex",
		flexDirection: "column",
		width: "1248px",
		height: "100vh",
		backgroundColor: "rgb(255 255 255)",
		padding: "0px 34px",
		overflow: "scroll",
	};

	return (
		listing && (
			<>
				<ModalContainer
					modalAreaStyling={modalAreaStyling}
					listingId={listing.id}
					handleClickItem={handleClickItem}
				>
					<ListingHeader />
					<Gallery listing={listing} />
					<Home listing={listing} />
				</ModalContainer>
			</>
		)
	);
};

export default ShowListing;
