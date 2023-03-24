import {
	ChakraProvider,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from "@chakra-ui/react";
import tabListTheme from "../Modal/ModalTabsTheme";

const UserProfileTabs = ({ yourHome }) => {
	return (
		<div className="profile-wrapper">
			<ChakraProvider theme={tabListTheme}>
				<Tabs>
					<div className="tabs-wrapper">
						<TabList borderBottom={"none"}>
							<Tab className="form-tab">Your Home</Tab>
							<Tab>Favorite Homes</Tab>
						</TabList>
					</div>
					<div className="content">
						<TabPanels>
							<TabPanel>{yourHome}</TabPanel>
							<TabPanel>
								<h1>Bar</h1>
							</TabPanel>
						</TabPanels>
					</div>
				</Tabs>
			</ChakraProvider>
		</div>
	);
};

export default UserProfileTabs;
