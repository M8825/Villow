import { Switch, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navigation from "./components/Header/Navigation";
import ShowListing from "./components/ShowListing";
import UserProfile from "./components/UserProfile/UserProfile";
import SplashPage from "./components/Splash/SplashPage";
import IndexPage from "./components/IndexPage/IndexPage";
import CreateListing from "./components/CreateListing/CreateListing";

import "./index.scss";
import { SkeletonTheme } from "react-loading-skeleton";

const App = () => {
  return (
    <>
      <SkeletonTheme baseColor="#eaeaea" highlightColor="#d9d9d9">
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
      </SkeletonTheme>
    </>
  );
};

export default App;
