import { useState } from "react";
import ListingForm from "../ListingForm/ListingForm";
import GrabAddressForm from "./GrabAddressForm";

import "./GrabAddress.scss";

const GrabAddress = () => {
	const [nextPage, setNextPage] = useState(false);

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
		<GrabAddressForm
			address={address}
			handleAddressChange={handleAddressChange}
			errors={errors}
			handleSubmit={handleSubmit}
		/>
	);
};

export default GrabAddress;
