import React from "react";
import App from "./App";
import configureStore from "./store";
import { restoreSession } from "./store/csrf";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { ChakraBaseProvider} from "@chakra-ui/react";

// TODO: remove these imports and remove lines 35 to 38
import { createUser, loginUser, logoutUser } from "./store/usersReducer.js";
import { createListing } from "./store/listingsReducer";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

let currentUser;

if (sessionStorage.getItem("currentUser") !== "undefined") {
	currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
}

let initialState;

if (currentUser) {
	initialState = {
		user: {
			active: JSON.parse(sessionStorage.getItem("currentUser"))
		}
	  };

}

const store = configureStore(initialState);

window.createUser = createUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.createLIsting = createListing;

const InitializeApp = () => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	);
};

root.render(
	<React.StrictMode>
		<ChakraBaseProvider >
			<InitializeApp />
		</ChakraBaseProvider>
	</React.StrictMode>
);

restoreSession().then(InitializeApp);
