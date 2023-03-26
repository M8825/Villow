import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ListingIndexItemHeart from "./ListingHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import "./ListingItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/listingsReducer";
import { fetchCurrentUser, getActiveUser } from "../../store/usersReducer";

const ListingItem = ({ listing, listingStyling, thumbnailStyling, userId }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(getActiveUser());

	const buildingType =
		listing.buildingType === "Apartment" ? "Apt" : listing.buildingType;
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
	});

	useEffect(() => {
		if (!currentUser) {
			dispatch(fetchCurrentUser());
		}
	}, []);

	const price = formatter.format(listing.price);
	const [color, setColor] = useState("black");

	const handleFavoriteClick = (e, listingId) => {
		e.preventDefault();
		e.stopPropagation();

		if (listing.favorite) {
			dispatch(removeFavorite(currentUser.id, listingId));
		} else {
			dispatch(addFavorite(currentUser.id, listingId));
		}
	};

	return (
		<>
			<li className="listing_item" style={listingStyling}>
				<Link to={`/listings/${listing.id}`}>
					<div className="listing_item__content_box">
						<div
							className="listing_item__thumbnail"
							style={{
								...thumbnailStyling,
								backgroundImage: `url(${
									listing.photoUrls[
										listing.photoUrls.length - 1
									]
								})`,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
							}}
						>
							<div className="listing_item__thumbnail__keyword">
								{listing.keyWords
									.split(" ")
									.slice(0, 3)
									.join(" ")}
							</div>
							<div
								className="listing_item__thumbnail__favorite"
								onClick={(e) =>
									handleFavoriteClick(e, listing.id)
								}
							>
								<ListingIndexItemHeart
									isFavorite={listing.favorite}
								/>
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
								{listing.address}
							</p>
							{/* TODO: FIX listing by */}
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
								{userId === listing.ownerId ? (
									<button
										onMouseEnter={() =>
											setColor("rgb(44, 104, 246)")
										}
										onMouseLeave={() => setColor("black")}
										style={{ color: color }}
									>
										<Link
											to={`/listings/${listing.id}/edit`}
										>
											<FontAwesomeIcon
												icon={faPenToSquare}
											/>
										</Link>
									</button>
								) : null}
							</div>
						</div>
					</div>
				</Link>
			</li>
		</>
	);
};

export default ListingItem;
