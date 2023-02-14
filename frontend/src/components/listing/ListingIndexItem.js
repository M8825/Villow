import React from "react";
import { Link } from "react-router-dom";
import ListingIndexItemHeart from "./ListingIndexItemHeart";
import useCurrencyFormatter from "../utils/useCurrencyFormatter";


const ListingItem = ({ listing }) => {
    const buildingType = listing.buildingType === "Apartment" ? "Apt" : listing.buildingType;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    const price = formatter.format(listing.price);

	return (
		<>
			<li className="listing_item">
				<Link to={`/listings/${listing.id}`}>
					<div className="listing_item__content_box">
						<img src={listing.photoUrl} alt="" />
						<div className="listing_item__thumbnail">
                            <div className="listing_item__thumbnail__keyword">
                                {listing.keyWords}
                            </div>
                            <div className="listing_item__thumbnail__favorite">
                            <ListingIndexItemHeart />
                            </div>
                        </div>

						<div className="listing_item__info">
							<h1>{price}</h1>
                            <div className="listing_item__info__details">
                            <p><span className="listing_item__info__details__bold_span">{listing.bedroom}</span> bd <span className="listing_item__info__details__light_span">|</span></p>
							<p><span className="listing_item__info__details__bold_span">{listing.bathroom}</span> ba <span className="listing_item__info__details__light_span">|</span></p>
							<p><span className="listing_item__info__details__bold_span">{listing.sqft}</span> sqft <span className="listing_item__info__details__light_span">|</span></p>
							<p>{buildingType} for {listing.listingType}</p>
                            </div>
							<p className="listing_item__info__details__address">{listing.address}</p>
							<p className="listing_item__info__details__listing_by"> LISTING BY: {listing.listingBy.toUpperCase()}</p>
						</div>
					</div>
				</Link>
			</li>
		</>
	);
};

export default ListingItem;
