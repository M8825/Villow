import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchListings } from "../../store/listingsReducer";
import { useSelector } from "react-redux";
import { getListings } from "../../store/listingsReducer";
import ListingItem from "./ListingIndexItem";
import "./Listing.scss";

const Listing = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchListings());
	}, [dispatch]);

	const listings = useSelector(getListings);
	const sampleListings = listings ? listings.slice(0, 4) : [];

	return (
		<>
			<div className="splat_listing_container">
				<div className="splat_listing_container__wrapper">
					<div className="splat_listing_container__headers">
						<h1>Homes For You in New York, NY</h1>
						<p>Based on your view history</p>
					<hr/>
					</div>
					<ul className="splat_listing_container__listings">
						{sampleListings.map((listing, i) => {
							return <ListingItem key={i} listing={listing} />;
						})}
					</ul>

				</div>
			</div>
		</>
	);
};

export default Listing;
