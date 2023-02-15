import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, getListings } from "../../store/listingsReducer";
import Carousel from "./Carousel";


const Listing = ({ header, paragraph}) => {
	const dispatch = useDispatch();

	const listings = useSelector(getListings);

	useEffect(() => {
		dispatch(fetchListings());
	}, [dispatch]);

	// TODO: Change it to more listings, Ideally on each swipe it should load another 4 listings
	const sampleListings = listings ? listings.slice(0, 5) : [];

	return (
		<>
			<div className="splat_listing_container">
				<div className="splat_listing_container__wrapper">
					<div className="splat_listing_container__headers">
						<h1>{header}</h1>
						<p>{paragraph}</p>
						<hr />
					</div>
					<ul className="carousel-container">
						<Carousel sampleListings={sampleListings} />
					</ul>
				</div>
			</div>
		</>
	);
};

export default Listing;
