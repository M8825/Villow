import Navigation from "../Header/Navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveUser } from "../../store/usersReducer";
import { fetchListingByUserId, getListings } from "../../store/listingsReducer";

import Footer from "../Footer";
import UserProfileTabs from "./UserProfileTabs";
import Card from "../Cards/Card";

import "./UserProfile.scss";

const UserProfile = () => {
	const dispatch = useDispatch();

	const currentUser = useSelector(getActiveUser());
	const listings = useSelector(getListings);

	useEffect(() => {
		if (currentUser) {
			dispatch(fetchListingByUserId(currentUser.id));
		}
	}, [dispatch, currentUser]);

	// const userListings
	return (
		listings && (
			<>
				<Navigation isIndex={true} />
				<UserProfileTabs>
					{listings.map((listing, idx) => (
						<Card key={idx} listing={listing} />
					))}
				</UserProfileTabs>
				<Footer />
			</>
		)
	);
};

export default UserProfile;
