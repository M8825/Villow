import Navigation from "../Header/Navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveUser } from "../../store/usersReducer";
import { fetchListingByUserId, getListings } from "../../store/listingsReducer";

import Footer from "../Footer";
import UserProfileTabs from "./UserProfileTabs";
import ProfileCard from "./ProfileCard";

import "./UserProfile.scss";
import { DeleteIcon } from "./Svgs";

const UserProfile = () => {
	const dispatch = useDispatch();

	const currentUser = useSelector(getActiveUser());
	const listings = useSelector(getListings);
	const [selectedListings, setSelectedListings] = useState([]);

	console.log(selectedListings)

	useEffect(() => {
		if (currentUser) {
			dispatch(fetchListingByUserId(currentUser.id));
		}
	}, [dispatch, currentUser]);

	const handleCheck = (event, listingId) => {

		const { checked } = event.target;

		if (checked) {
			setSelectedListings([...selectedListings, listingId]);
		} else {
			setSelectedListings(selectedListings.filter((id) => id !== listingId));
		}

	};

	return (
		listings && (
			<>
				<Navigation isIndex={true} />
				<UserProfileTabs>
					<div className="header-wrapper">
						<h1 className="your-home-title">Your home</h1>

						<div className="delete-home" onClick={handleCheck}>
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
				</UserProfileTabs>
				<Footer />
			</>
		)
	);
};

export default UserProfile;
