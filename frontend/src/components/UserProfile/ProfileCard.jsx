import ListingItem from "../ListingItem/ListingItem";
import { Bath, BuildIn, Garage, Heating, Type } from "./Svgs";

import "./ProfileCardListingItem.scss";
import "./ProfileCard.scss";
import "../Cards/style/card.scss";

const ProfileCard = ({
	listing,
	listingStyling,
	thumbnailStyling,
	userId,
	handleCheck,
	listingId,
}) => {

	const handleCheckbox = (e) => {
		handleCheck(e, listingId);

	};

	return (
		<div className="cards-container__card profile_card">
			<div className="header-selector">
				<input
					type="checkbox"
					onChange={handleCheckbox}
					className="foo"
				/>
				<p>Select Home</p>
			</div>
			<div className="listing-item-wrapper">
				<ListingItem
					listing={listing}
					userId={userId}
					listingStyling={listingStyling}
					thumbnailStyling={thumbnailStyling}
				/>
				<hr className="my-hr" />
			</div>
			<div className="listing-type">
				<div className="listing-detail-type type-attr">
					<Type className="type-icon" />
					<div className="text-wrapper">
						<h6>Type</h6>
						<span>{listing.buildingType}</span>
					</div>
				</div>
				<div className="listing-detail-type type-attr">
					<Garage className="type-icon" />
					<div className="text-wrapper">
						<h6>Garage</h6>
						<span>{listing.garage ? "Yes" : "No"}</span>
					</div>
				</div>
				<div className="listing-detail-type type-attr">
					<Heating className="type-icon" />
					<div className="text-wrapper">
						<h6>Heating</h6>
						<span>{listing.heating ? "Yes" : "No"}</span>
					</div>
				</div>
				<div className="listing-detail-type type-attr">
					<BuildIn className="type-icon" />
					<div className="text-wrapper">
						<h6>Built In</h6>
						<span>{listing.builtIn}</span>
					</div>
				</div>
				<div className="listing-detail-type type-attr">
					<Bath className="type-icon" />
					<div className="text-wrapper">
						<h6>Cooling</h6>
						<span>{listing.ac ? "Yes" : "No"}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
