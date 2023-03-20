import { useState } from "react";
import ListingForm from "../ListingForm/ListingForm";
import SelectedState from "./SelectedState";

import "./GrabAddress.scss";

const GrabAddress = () => {
	const [nextPage, setNextPage] = useState(null);

	const [address, setAddress] = useState({
		streetAddress: "",
		apt: "",
		city: "",
		state: "",
		zipcode: "",
	});

	const handleAddressChange = (e, input) => {
		e.preventDefault();

		switch (input) {
			case "streetAddress":
				setAddress({ ...address, streetAddress: e.target.value });
				break;
			case "apt":
				setAddress({ ...address, apt: e.target.value });
				break;
			case "city":
				setAddress({ ...address, city: e.target.value });
				break;
			case "state":
				setAddress({ ...address, state: e.target.value });
				break;
			case "zipcode":
				setAddress({ ...address, zipcode: e.target.value });
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setNextPage(true);
	};

	return nextPage ? (
		<ListingForm />
	) : (
		<div className="address-input-wrapper">
			<form className="address-input">
				<div className="trapezoid-wrapper">
					<div className="rectangle">
						<p>Post a For Sale by Owner Listing</p>
					</div>
					<div className="trapezoid"></div>
				</div>
				<div className="grab-address">
					<input
						type="text"
						onChange={(e) =>
							handleAddressChange(e, "streetAddress")
						}
						placeholder="Street address"
						value={address.streetAddress}
					/>

					<input
						type="text"
						onChange={(e) => handleAddressChange(e, "unit")}
						placeholder="Unit# (optional)"
						value={address.streetAddress}
					/>

					<input
						type="text"
						placeholder="City"
						value={address.city}
						onChange={(e) => handleAddressChange(e, "city")}
					/>

					<SelectedState handleAddressChange={handleAddressChange} />

					<input
						type="text"
						placeholder="Zip code"
						value={address.zipcode}
						onChange={(e) => handleAddressChange(e, "zipcode")}
					/>
					<button
						className="submit-btn"
						type="submit"
						onClick={handleSubmit}
					>
						Continue
					</button>
				</div>
			</form>
			<h2>Why post on Villow?</h2>
			<div className="address-input-bottom">
				<div className="description-items">
					<div className="home-image"></div>
					<h5>
						Post a listing for free, including video and unlimited
						photos.
					</h5>
				</div>
				<div className="description-items">
					<div className="rupor-image"></div>
					<h5>
						Your home will be listed on Villow and Trulia, reaching
						the largest audience of home shoppers on the Web.
					</h5>
				</div>
				<div className="description-items">
					<div className="check-mark"></div>
					<h5>
						Home shoppers receive instant emails about new listings.
					</h5>
				</div>
			</div>
		</div>
	);
};

export default GrabAddress;
