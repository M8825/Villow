import { useState } from "react";
import Geocode from "react-geocode";
import ConfirmLocation from "./ConfirmLocation";
import GrabAddressForm from "./GrabAddressForm";

import "./GrabAddress.scss";
import "../ListingForm/ListingForm.scss";

const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

// TODO: add update address functionality
const GrabAddress = () => {
	// State to keep track of whether to render next page
	const [nextPage, setNextPage] = useState(false);
	const [coordinates, setCoordinates] = useState({});

	// State to keep track of address inputs
	const [address, setAddress] = useState({
		streetAddress: "",
		unit: "",
		city: "",
		state: "",
		zipcode: "",
	});

	// State to keep track of errors
	const [errors, setErrors] = useState({
		isSet: false,
		streetAddress: "",
		unit: "",
		city: "",
		state: "",
		zipcode: "",
	});

	// Handler function to handle address input changes
	// and update address state accordingly
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

	// Helper function to check if zipcode is all digit
	const isDigits = (zipcode) => {
		return /^\d+$/.test(zipcode) && zipcode.length === 5;
	};

	// Invoked at submit click and checks if all inputs are valid
	// based on relevant conditions. Updates errors state if
	// any inputs are invalid.
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

		if (address.state === "---") {
			newErrors.state = "Please select a state";
			isValid = false;
		} else {
			newErrors.state = "";
		}

		if (!address.zipcode) {
			newErrors.zipcode = "Please enter a zipcode";
			isValid = false;
		} else if (!isDigits(address.zipcode)) {
			newErrors.zipcode = "Please enter a valid zipcode";
			isValid = false;
		} else {
			newErrors.zipcode = "";
		}

		setErrors({ ...errors, ...newErrors, isSet: true });

		return isValid;
	};

	const getCoordinatesFromAddress = async () => {

			const addressString = `${address.streetAddress} ${address.unit}, ${address.city}, ${address.state} ${address.zipcode}`;
			Geocode.setApiKey(`${MAPS_API_KEY}`);
			const response = await Geocode.fromAddress(addressString);

			if (response.status === "OK") {
				const coords = response.results[0].geometry.location;
				setCoordinates(coords)
			}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		// If all inputs are valid, set nextPage to true
		// to render next page which will confirm address
		// on the Map component
		if (validateAddress()) {
			await getCoordinatesFromAddress();
			setNextPage(true);
		}
	};

	return nextPage ? (
		<ConfirmLocation coordinates={coordinates} address={address} />
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
