import Navigation from "../Header/Navigation";
import Footer from "../Footer";
import UserProfileTabs from "./UserProfileTabs";

import "./UserProfile.scss";

const UserProfile = () => {
	return (
		<>
			<Navigation isIndex={true} />
			<UserProfileTabs />
			<Footer />
		</>
	);
};

export default UserProfile;
