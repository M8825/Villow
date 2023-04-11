import ListingsCarousel from "../ListingsCarousel/ListingsCarousel";
import Layout from "../Cards";
import Footer from "../Footer";
import Navigation from "../Header/Navigation";
import { generateRandomString } from "../utils/utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchListings } from "../../store/listingsReducer";
import { clearAllListings } from "../../store/listingsReducer";

const SplashPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListings());

    return () => {
      dispatch(clearAllListings());
    };
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <ListingsCarousel
        prevButtonClassName={generateRandomString(10)}
        nextButtonClassName={generateRandomString(10)}
        header={"Homes For You in New York, NY"}
        paragraph={"Based on your view history"}
      />
      <Layout />
      <ListingsCarousel
        prevButtonClassName={generateRandomString(10)}
        nextButtonClassName={generateRandomString(10)}
        header={"Trending Homes in New York, NY"}
        paragraph={"Popular listings in the area"}
      />
     <ListingsCarousel
        prevButtonClassName={generateRandomString(10)}
        nextButtonClassName={generateRandomString(10)}
        header={"Selling Soon Homes in New York, NY"}
        paragraph={"Likely to sell faster than 80% of homes nearby"}
      />
      <Footer />
    </>
  );
};

export default SplashPage;
