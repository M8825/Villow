import { Switch, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navigation from "./components/Header/Navigation";
import ShowListing from "./components/ShowListing";
import UserProfile from "./components/UserProfile/UserProfile";
import SplashPage from "./components/Splash/SplashPage";
import IndexPage from "./components/IndexPage/IndexPage";
import CreateListing from "./components/CreateListing/CreateListing";

import "./index.scss";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exec path="/listings/new" component={CreateListing} />
        <Route
          exec
          path="/listings/:listingId/edit"
          component={CreateListing}
        />
        <Route exact path="/user/:id" component={UserProfile} />
        <Route exact path="/" component={SplashPage} />

        <Route exact path="/listings">
          <Navigation isIndex={true} />
          <IndexPage />
        </Route>
        <Route path="/listings/:listingId/edit" component={CreateListing} />
        <Route exact path="/listings/new" component={CreateListing} />
        <Route exact path="/listings/:listingId" component={ShowListing} />
      </Switch>
    </>
  );
};

export default App;
