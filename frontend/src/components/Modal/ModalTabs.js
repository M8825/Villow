import React from "react";
import tabListTheme from "./ModalTabsTheme";
import {
	ChakraProvider,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from "@chakra-ui/react";
import LoginForm from "../Authentication/LoginForm";
import NewAccountForm from "../Authentication/NewAccountForm";
import ModalWelcomeHeader from "../Header/Welcome";

const ModalTabs = ({ closeModal }) => {
	return (
		<ChakraProvider theme={tabListTheme}>
			<Tabs>
				<TabList
					borderBottom={"1px solid "}
					borderColor={"rgb(209 209 213)"}
				>
					<Tab className="form-tab">Sign in</Tab>
					<Tab>New Account</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<LoginForm closeModal={closeModal} />
					</TabPanel>
					<TabPanel>
						<NewAccountForm closeModalFunc={closeModal} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</ChakraProvider>
	);
};

export default ModalTabs;
