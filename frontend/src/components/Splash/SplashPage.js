import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import Navigation from "../Header/Navigation";
import ListingsCarousel from "../ListingsCarousel/ListingsCarousel";
import Layout from "../Cards";
import Footer from "../Footer";

import { generateRandomString } from "../utils/utils";
import { fetchListings, clearAllListings } from "../../store/listingsReducer";
import { DownArrow } from "./SplashPageUtils";

import 'react-loading-skeleton/dist/skeleton.css'
import "./SplashPage.scss";

const SplashPage = () => {
	const dispatch = useDispatch();
	const lastCarousel = useRef(null);

	useEffect(() => {
		dispatch(fetchListings());

		return () => {
			dispatch(clearAllListings());
		};
	}, [dispatch]);

	function scrollToLastCarousel() {
		lastCarousel.current.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<>
			<Navigation />
			<ListingsCarousel
				prevButtonClassName={generateRandomString(10)}
				nextButtonClassName={generateRandomString(10)}
				header={"Homes For You in New York, NY"}
				paragraph={"Based on your view history"}
			/>

      <div className="more-recommended-homes">
        <DownArrow />
        <a
          href="#last-carousel"
          onClick={scrollToLastCarousel}
        >
          {" "}
          More recommended homes
        </a>
      </div>
			<Layout />
			<div ref={lastCarousel}>
				<ListingsCarousel
					prevButtonClassName={generateRandomString(10)}
					nextButtonClassName={generateRandomString(10)}
					header={"Trending Homes in New York, NY"}
					paragraph={"Popular listings in the area"}
				/>
			</div>
			<Footer />
		</>
	);
};

export default SplashPage;
