import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListingByUserId } from "../../store/listingsReducer";
import { getActiveUser } from "../../store/usersReducer";
import Navigation from "../Header/Navigation";

import Footer from "../Footer";
import UserProfileTabs from "./UserProfileTabs";

import YourHome from "./YourHome";
import "./UserProfile.scss";
import Favorites from "./Favorites";

const UserProfile = () => {
	const dispatch = useDispatch();

	const currentUser = useSelector(getActiveUser());

	useEffect(() => {
		if (currentUser) {
			dispatch(fetchListingByUserId(currentUser.id));
		}
	}, [dispatch, currentUser]);

	return (
		<>
			<Navigation isIndex={true} />
			<UserProfileTabs
				yourHome={<YourHome currentUser={currentUser} />}

				 // NOTE(mlkz): Do I really need currentUser of front end?
				favorites={<Favorites currentUser={currentUser}/>}
			/>
			<Footer />
		</>
	);
};

export default UserProfile;
