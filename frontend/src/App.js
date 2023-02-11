// import foobar from "./components/TextFeature/foobar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/header/Navigation";

const App = () => (
	<Router>
		<>
			<Switch>
				<Route exact path="/" component={Nav} />
			</Switch>
		</>
	</Router>
);

export default App;
