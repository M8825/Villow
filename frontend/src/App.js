import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SessionContainer from "./components/SessionContainer";

const App = () => (
	<Router>
		<>
			<Switch>
				<Route
          exact
					path="/"
					component={SessionContainer}
				/>
			</Switch>
		</>
	</Router>
);

export default App;
