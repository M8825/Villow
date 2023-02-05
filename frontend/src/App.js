import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";


const App = () => (
	<Router>
		<>
      <h1> Form should be below</h1>
      <Switch>
				<Route
					path="/login"
					component={LoginFormPage}
				/>
      </Switch>
		</>
	</Router>
);
export default App;
