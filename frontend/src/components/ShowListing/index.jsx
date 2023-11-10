import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListing, fetchListing } from "../../store/listingsReducer";

import ModalContainer from "../Modal/ModalContainer";
import Gallery from "./gallery";
import Home from "./Home";

import "./style/index.scss"
import ListingHeader from "./ListingHeader";

const ShowListing = ({ isOpen, onClose }) => {
	const { listingId } = useParams();
	const dispatch = useDispatch();
	const listing = useSelector(getListing(listingId));

	console.log("listing: ", listing);

	useEffect(() => {
		dispatch(fetchListing(listingId));
	}, [dispatch, listingId]);

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
        listing &&
		<>
			<ModalContainer modalAreaStyling={modalAreaStyling}>
                <ListingHeader />
				<Gallery listing={listing} />
				<Home listing={listing} />
			</ModalContainer>
		</>
	);
};

export default ShowListing;
