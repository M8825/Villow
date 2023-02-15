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

	return (
		<>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-around",
					padding: "10px",
					gap: "10px",
					width: "40vw",
					height: "100vh",
				}}
			>
				{listings.map((listing) => {
					return (
						<ListingItem
							listing={listing}
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
