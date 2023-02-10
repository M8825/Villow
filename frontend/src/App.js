import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SessionContainer from "./components/session_modal/SessionContainer";
import Nav from "./components/header/Navigation";
import Listing from "./components/listing/Listing";

const App = () => (
	<Router>
		<>
			<Switch>
				<Route
          exact
					path="/"
					component={Nav}
				/>
			</Switch>
		</>
	</Router>
);

export default App;
