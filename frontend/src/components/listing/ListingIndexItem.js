import React from "react";
import { Link } from "react-router-dom";
import ListingIndexItemHeart from "./ListingIndexItemHeart";
import useCurrencyFormatter from "../utils/useCurrencyFormatter";


const ListingItem = ({ listing, listingStyling, thumbnailStyling }) => {
    const buildingType = listing.buildingType === "Apartment" ? "Apt" : listing.buildingType;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    const price = formatter.format(listing.price);

	return (
		<>
			<li className="listing_item" style={listingStyling}>
				<Link to={`/listings/1`}>
					<div className="listing_item__content_box" >
					<div className="listing_item__thumbnail" style={{ backgroundImage: `url(${listing.photoUrl[0]})`, backgroundSize: "cover", ...thumbnailStyling}} >
                            <div className="listing_item__thumbnail__keyword">
                                {listing.keyWords.split(" ").slice(0, 3).join(" ")}
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
