import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getListings, fetchListings } from "../../store/listingsReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { getActiveUser } from "../../store/usersReducer";

import ListingItem from "../ListingItem/ListingItem";
import "./ListingsIndex.scss";

const ListingsPage = () => {
	const dispatch = useDispatch();
	const listings = useSelector(getListings);
	const [reversed, setReversed] = useState(false);

	useEffect(() => {
		if (listings.length === 0) {
			dispatch(fetchListings());
		}
	}, [dispatch, listings]);

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

	const currentUser = useSelector(getActiveUser());

	const listingStyling = {
		flexBasis: "49%",
		maxWidth: "49%",
		height: "281px",
	};

	const thumbnailStyling = {
		height: "171px",
	};

	const handleClick = (e) => {
		e.preventDefault();
		setReversed(!reversed);
	};

	return (
		<>
			<div className="index-container">
				<div className="listing-container-header">
					<h1>Manhattan NY Real Estate & Homes For Sale</h1>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<div className="listing-container-header__btn_container">
							<button className="btn1">
								<span>{listings.length}</span> Agent listings
							</button>
							<button className="btn2">
								{" "}
								<span>0</span> Agent listings
							</button>
						</div>
						<FontAwesomeIcon
							icon={faArrowUp}
							onClick={handleClick}
						/>
					</div>
				</div>
				<div className="listings-container">
					{reversed
						? listings
								.reverse()
								.map((listing, i) => (
									<ListingItem
										key={i}
										listing={listing}
										style
										listingStyling={listingStyling}
										thumbnailStyling={thumbnailStyling}
										userId={currentUser.id}
									/>
								))
						: listings.map((listing, i) => (
								<ListingItem
									key={i}
									listing={listing}
									style
									listingStyling={listingStyling}
									thumbnailStyling={thumbnailStyling}
									userId={currentUser.id}
								/>
						  ))}
				</div>
			</div>
		</>
	);
};

export default ListingsPage;
