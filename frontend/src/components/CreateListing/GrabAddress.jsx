import { useState } from "react";
import ListingForm from "../ListingForm/ListingForm";
import SelectedState from "./SelectedState";

import "./GrabAddress.scss";

const GrabAddress = () => {
	const [nextPage, setNextPage] = useState(null);

	const [address, setAddress] = useState({
		streetAddress: "",
		unit: "",
		city: "",
		state: "",
		zipcode: "",
	});

	const [errors, setErrors] = useState({
		isSet: false,
		streetAddress: "",
		unit: "",
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
			case "unit":
				setAddress({ ...address, unit: e.target.value });
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

	const isDigits = (zipcode) => {
		return /^\d+$/.test(zipcode);
	};

	const validateAddress = () => {
		let newErrors = {};
		let isValid = true;

		if (!address.streetAddress) {
			newErrors.streetAddress = "Please enter a street address";
			isValid = false;
		} else {
			newErrors.streetAddress = "";
		}

		if (!address.city) {
			newErrors.city = "Please enter a city";
			isValid = false;
		} else {
			newErrors.city = "";
		}

		if (!address.state) {
			newErrors.state = "Please select a state";
			isValid = false;
		} else {
			newErrors.state = "";
		}

		if (!address.zipcode) {
			newErrors.zipcode = "Please enter a zipcode";
			isValid = false;
		} else if (!isDigits(address.zipcode) || address.zipcode.length !== 5) {
			newErrors.zipcode = "Please enter a valid zipcode";
			isValid = false;
		} else {
			newErrors.zipcode = "";
		}

		setErrors({ ...errors, ...newErrors, isSet: true });

		return isValid;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validateAddress()) {
			setNextPage(true);
		}
	};

	return nextPage ? (
		<ListingForm address={address} />
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
					<div className="input-wrapper">
						<input
							type="text"
							onChange={(e) =>
								handleAddressChange(e, "streetAddress")
							}
							placeholder="Street address"
							value={address.streetAddress}
						/>

						<p>{errors.isSet && errors.streetAddress}</p>
					</div>

					<div className="input-wrapper">
						<input
							type="text"
							onChange={(e) => handleAddressChange(e, "unit")}
							placeholder="Unit# (optional)"
							value={address.unit}
						/>
						<p>{errors.isSet && " "}</p>
					</div>

					<div className="input-wrapper">
						<input
							type="text"
							placeholder="City"
							value={address.city}
							onChange={(e) => handleAddressChange(e, "city")}
						/>
						<p>{errors.isSet && errors.city}</p>
					</div>

					<div className="input-wrapper">
						<SelectedState
							handleAddressChange={handleAddressChange}
						/>
						<p>{errors.isSet && errors.state}</p>
					</div>

					<div className="input-wrapper">
						<input
							type="text"
							placeholder="Zip code"
							value={address.zipcode}
							onChange={(e) => handleAddressChange(e, "zipcode")}
						/>
						<p>{errors.isSet && errors.zipcode}</p>
					</div>

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
