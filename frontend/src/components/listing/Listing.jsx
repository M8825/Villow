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

	let listings = useSelector(getListings);

	return (
		<>
			<div className="splat_listing_container">
				<ul className="splat_listing_container__listings">
					{listings.map((listing, i) => {
						return <ListingItem
							key={i}
							listing={listing}
						/>
                    })}
				</ul>
			</div>
		</>
	);
};

export default Listing;
