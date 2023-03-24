import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteListing,
    fetchListings,
    getListings
} from "../../store/listingsReducer";
import ProfileCard from "./ProfileCard";
import { DeleteIcon } from "./Svgs";



const YourHome = ({ currentUser }) => {
	const dispatch = useDispatch();


	const listings = useSelector(getListings);
	const [selectedListings, setSelectedListings] = useState([]);

	useEffect(() => {
		if (currentUser) {
			dispatch(fetchListings(currentUser.id));
		}
	}, []);


	const handleCheck = (event, listingId) => {
		const { checked } = event.target;

		if (checked) {
			setSelectedListings([...selectedListings, listingId]);
		} else {
			setSelectedListings(
				selectedListings.filter((id) => id !== listingId)
			);
		}
	};

	const handleDelete = (e) => {
		e.preventDefault();

		dispatch(deleteListing(selectedListings));
	};

	return (
		<div className="your-home-wrapper">
			<div className="header-wrapper">
				<h1 className="your-home-title">Your home</h1>
				<div className="delete-home" onClick={handleDelete}>
					<DeleteIcon />
					<p>Remove</p>
				</div>
			</div>
			<div className="listing-cards-wrapper">
				{listings.map((listing) => (
					<ProfileCard
						key={listing.id}
						listingId={listing.id}
						listing={listing}
						className="card"
						handleCheck={handleCheck}
					/>
				))}
			</div>
		</div>
	);
};

export default YourHome;
