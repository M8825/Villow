import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getListings, fetchListings } from "../../store/listingsReducer";
import ListingItem from "../listing/ListingIndexItem";

const ListingsPage = () => {
	const dispatch = useDispatch();
	const listings = useSelector(getListings);

	useEffect(() => {
		dispatch(fetchListings());
	}, []);

	const history = useHistory();
	const [isModalOpen, setIsModalOpen] = useState(true);

	const handleOpenModal = () => {
		setIsModalOpen(true);
		history.push("/listings/listingId");
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		history.push("/listings");
	};

	const listingStyling = {
		flexBasis: "49%",
		maxWidth: "49%",
		height: "281px",
	};

	const thumbnailStyling = {
		height: "171px",
	};

	return (
		<>
			<div className="index-container">
				<div className="listing-container-header">
					<h1>Manhattan NY Real Estate & Homes For Sale</h1>
					<div className="listing-container-header__btn_container">
						<button className="btn1">
							<span>{listings.length}</span> Agent listings
						</button>
						<button className="btn2">
							{" "}
							<span>0</span> Agent listings
						</button>
					</div>
				</div>
				<div className="listings-container">
					{listings.map((listing) => {
						return (
							<ListingItem
								listing={listing}
								style
								listingStyling={listingStyling}
								thumbnailStyling={thumbnailStyling}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default ListingsPage;
