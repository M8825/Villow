import React from "react";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import { restoreSession } from "./store/csrf";
import { createUser, loginUser, logoutUser } from "./store/usersReducer.js";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from '@chakra-ui/theme'


const domNode = document.getElementById("root");
const root = createRoot(domNode);

let currentUser;

if (sessionStorage.getItem("currentUser") !== "undefined") {
	currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
}

let initialState = {};
if (currentUser) {
	initialState = {
		user: currentUser,
	};
}

const store = configureStore(initialState);

window.createUser = createUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;

const InitializeApp = () => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	);
};

// const { Button, Form } = chakraTheme.components

// const theme = extendBaseTheme({
//   components: {
//     Button,
//     Form,
//   },
// })

root.render(
	<React.StrictMode>
		<ChakraBaseProvider >
			<InitializeApp />
		</ChakraBaseProvider>
	</React.StrictMode>
);

restoreSession().then(InitializeApp);
