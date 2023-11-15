import React from "react";
import App from "./App";
import configureStore from "./store";
import { restoreSession } from "./store/csrf";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// TODO: remove these imports and remove lines 35 to 38
import { createUser, loginUser, logoutUser } from "./store/usersReducer.js";
import { createListing } from "./store/listingsReducer";
import { getLocalStorageSearchCredentials } from "./store/utils";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const localStorageData = getLocalStorageSearchCredentials();

let initialState = {
  searchFilter: {
    ...localStorageData,
  },
};

const store = configureStore(initialState);

root.render(
  <React.StrictMode>
    <ChakraBaseProvider>
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    </ChakraBaseProvider>
  </React.StrictMode>
);

restoreSession();
