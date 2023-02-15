import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getListings, fetchListings } from "../../store/listingsReducer";
import ListingItem from "../listing/ListingIndexItem";
import Nav from "../header/Navigation";
import ListingIndex from "../listing";
import Layout from "../cards";
import Footer from "../footer";
import ShowListing from "../showListing";
import { Heading } from "@chakra-ui/react";

const ListingsPage = () => {
	const dispatch = useDispatch();
	const listings = useSelector(getListings);

	useEffect(() => {
		dispatch(fetchListings());
	}, []);

	const history = useHistory();
	const [isModalOpen, setIsModalOpen] = useState(true);
	debugger;

	const handleOpenModal = () => {
		setIsModalOpen(true);
		history.push("/listings/listingId");
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		history.push("/listings");
	};

	const listingStyling = {
		backgroundColor: "yellow",
		flexBasis: "49%",
		maxWidth: "49%",
		height: "281px"
	};

	const thumbnailStyling = {
		height: "171px",

	}

	return (
		<>
			<div className="listings-container">
				{listings.map((listing) => {
					return (
						<ListingItem
							listing={listing} style
							listingStyling={listingStyling}
							thumbnailStyling={thumbnailStyling}
						/>
					);
				})}
			</div>
			{/* <Nav />
        <ListingIndex onOpenModal={handleOpenModal} />
        <Layout />
        <Footer />
        <ShowListing isOpen={isModalOpen} onClose={handleCloseModal} /> */}
		</>
	);
};

export default ListingsPage;
