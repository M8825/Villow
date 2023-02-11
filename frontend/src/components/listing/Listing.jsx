import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, getListings } from "../../store/listingsReducer";
import Carousel from "./Carousel";
import "./Listing.scss";

const Listing = () => {
	const dispatch = useDispatch();

	const listings = useSelector(getListings);

	useEffect(() => {
		dispatch(fetchListings());
	}, [dispatch]);

	const sampleListings = listings ? listings.slice(0, 5) : [];

	return (
		<>
			<div className="splat_listing_container">
				<div className="splat_listing_container__wrapper">
					<div className="splat_listing_container__headers">
						<h1>Homes For You in New York, NY</h1>
						<p>Based on your view history</p>
						<hr />
					</div>
					<ul className="splat_listing_container__listings">
						<Carousel sampleListings={sampleListings} />
					</ul>
				</div>
			</div>
		</>
	);
};

export default Listing;
