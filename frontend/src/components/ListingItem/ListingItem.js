import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ListingIndexItemHeart from "./ListingHeart";
import ShowListing from "../ShowListing/index";

import { addFavorite, removeFavorite } from "../../store/listingsReducer";
import { getActiveUser } from "../../store/usersReducer";

import "./ListingItem.scss";

const ListingItem = ({ listing, listingStyling, thumbnailStyling}) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(getActiveUser());
  const [isListingClicked, setIsListingClicked] = useState(false);

	const buildingType =
		listing.buildingType === "Apartment" ? "Apt" : listing.buildingType;
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
	});

	const price = formatter.format(listing.price);

	const handleFavoriteClick = (e, listingId) => {
		e.preventDefault();
		e.stopPropagation();

		if (listing.favorite) {
			dispatch(removeFavorite(currentUser.id, listingId));
		} else {
			dispatch(addFavorite(currentUser.id, listingId));
		}
	};

	const handleClickItem = (e) => {

		window.history.pushState({}, '', `/listing/${listing.id}`);
		setIsListingClicked(!isListingClicked);
	}

	return (
		<>
			{ isListingClicked ? <ShowListing listing={listing} handleClickItem={handleClickItem}/> : null }
			<li className="listing_item" style={listingStyling} onClick={handleClickItem}>
				<div className="listing_item__content_box">
					<div
						className="listing_item__thumbnail"
						style={{
							...thumbnailStyling,
							backgroundImage: `url(${
								listing.photoUrls[listing.photoUrls.length - 1]
							})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="listing_item__thumbnail__keyword">
							{listing.keyWords.split(" ").slice(0, 3).join(" ")}
						</div>
						<div
							className="listing_item__thumbnail__favorite"
							onClick={(e) => handleFavoriteClick(e, listing.id)}
						>
							<ListingIndexItemHeart isFavorite={listing.favorite} />
						</div>
					</div>

					<div className="listing_item__info">
						<h1>{price}</h1>
						<div className="listing_item__info__details">
							<p>
								<span className="listing_item__info__details__bold_span">
									{listing.bedroom}
								</span>{" "}
								bd{" "}
								<span className="listing_item__info__details__light_span">
									|
								</span>
							</p>
							<p>
								<span className="listing_item__info__details__bold_span">
									{listing.bathroom}
								</span>{" "}
								ba{" "}
								<span className="listing_item__info__details__light_span">
									|
								</span>
							</p>
							<p>
								<span className="listing_item__info__details__bold_span">
									{listing.sqft}
								</span>{" "}
								sqft{" "}
								<span className="listing_item__info__details__light_span">
									|
								</span>
							</p>
							<p>
								{buildingType} for {listing.listingType}
							</p>
						</div>
						<p className="listing_item__info__details__address">
							{`${listing.address} ${listing.city}, ${listing.state} ${listing.zipcode}`}
						</p>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<p className="listing_item__info__details__listing_by">
								{" "}
								LISTING BY: {"Mlkz".toUpperCase()}
							</p>
						</div>
					</div>
				</div>
				{/* </Link> */}
			</li>
		</>
	);
};

export default ListingItem;
