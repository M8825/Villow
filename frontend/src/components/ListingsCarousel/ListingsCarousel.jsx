import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, getListings } from "../../store/listingsReducer";
import Carousel from "./Carousel";

import "./ListingsCarousel.scss"


const ListingsCarousel = ({ header, paragraph}) => {
	const dispatch = useDispatch();

	const listings = useSelector(getListings);

	useEffect(() => {
		dispatch(fetchListings());
	}, [dispatch]);

	const sampleListings = listings ? listings.slice(0, 15) : [];

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

export default ListingsCarousel;
