import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	ChakraProvider,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from "@chakra-ui/react";

import { getActiveUser } from "../../store/usersReducer";
import { fetchListingByUserId } from "../../store/listingsReducer";

import tabListTheme from "../Modal/ModalTabsTheme";
import YourHome from "./YourHome";
import Favorites from "./Favorites";

const UserProfileTabs = () => {
	const dispatch = useDispatch();

	const currentUser = useSelector(getActiveUser());

	useEffect(() => {
		if (currentUser) {
			dispatch(fetchListingByUserId(currentUser.id));
		}
	}, [dispatch, currentUser]);

	return (
		<div className="profile-wrapper">
			<ChakraProvider theme={tabListTheme}>
				<Tabs isLazy>
					<div className="tabs-wrapper">
						<TabList borderBottom={"none"}>
							<Tab className="form-tab">Your Home</Tab>
							<Tab>Favorite Homes</Tab>
						</TabList>
					</div>
					<div className="content">
						<TabPanels>
							<TabPanel><YourHome currentUser={currentUser}/></TabPanel>
							<TabPanel><Favorites currentUser={currentUser}/></TabPanel>
						</TabPanels>
					</div>
				</Tabs>
			</ChakraProvider>
		</div>
	);
};

export default UserProfileTabs;
