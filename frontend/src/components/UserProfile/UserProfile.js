import Navigation from "../Header/Navigation";
import tabListTheme from "../Modal/ModalTabsTheme";
import {
	ChakraProvider,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from "@chakra-ui/react";
import Footer from "../Footer";
import Card from "../Cards/Card";

import "./UserProfile.scss";

const UserProfile = () => {
	return (
		<>
			<Navigation isIndex={true} />
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
									<h1>Foo</h1>
                                    <Card />
								</TabPanel>
								<TabPanel>
									<h1>Bar</h1>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</ChakraProvider>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default UserProfile;
