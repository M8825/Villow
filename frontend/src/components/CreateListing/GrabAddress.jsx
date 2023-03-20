import { useState } from "react";
import ListingForm from "../ListingForm/ListingForm";

import "./GrabAddress.scss";
import SelectedState from "./SelectedState";

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
		<form className="map-confirmation">
			<div className="trapezoid-wrapper">
				<div className="rectangle">
					<p>Post a For Sale by Owner Listing</p>
				</div>
				<div className="trapezoid"></div>
			</div>
			<div className="grab-address">
				<input
					type="text"
					onChange={(e) => handleAddressChange(e, "streetAddress")}
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
	);
};

export default GrabAddress;
