import {
	ChakraProvider,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from "@chakra-ui/react";
import tabListTheme from "../Modal/ModalTabsTheme";

const UserProfileTabs = (props) => {
	return (
		<div className="profile-wrapper">
			<div className="content">
				<ChakraProvider theme={tabListTheme}>
					<Tabs>
						<TabList
							borderBottom={"1px solid "}
							borderColor={"rgb(209 209 213)"}
						>
							<Tab className="form-tab">Your Home</Tab>
							<Tab>Favorite Homes</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
                                {props.children}
							</TabPanel>
							<TabPanel>
								<h1>Bar</h1>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</ChakraProvider>
			</div>
		</div>
	);
};

export default UserProfileTabs;
