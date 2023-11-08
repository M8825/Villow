import React, { useState } from "react";
import ListingForm from "../ListingForm/ListingForm";
import ConfirmationMap from "./ConfirmationMap";
import Geocode from "react-geocode";
import "./ConfirmLocation.scss";

const ConfirmLocation = ({ address, coordinates }) => {
	const containerStyle = {
		width: "1240px",
		height: "400px",
	};

	const [selectedPosition, setSelectedPosition] = useState(coordinates);
	const [changeLocation, setChangeLocation] = useState(false);
	const [nextPage, setNextPage] = useState(false);
	const [resultAddress, setResultAddress] = useState(address);

	const handleLocationChange = (e) => {
		e.preventDefault();
		setChangeLocation(true);
	};

	const handleCancel = (e) => {
		e.preventDefault();
		setChangeLocation(false);
	};

	const getCoordinatesFromCoordinates = async () => {
		const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
		Geocode.setApiKey(MAPS_API_KEY);
		const response = await Geocode.fromLatLng(selectedPosition.lat, selectedPosition.lng);

		if (response.status === "OK") {
			const generatedAddress = response.results[0].formatted_address;
			setResultAddress(generatedAddress);
		}

		return null;
}

	const handleSubmit = (e) => {
		e.preventDefault();

		getCoordinatesFromCoordinates();
		setNextPage(true);

	};

	return nextPage ? (
		<ListingForm resultAddress={resultAddress} coordinates={selectedPosition} />
	) : (
		<div className="confirm-location-map-container">
			<div className="header-for-sale">
				<h1>For Sale by Owner Listing</h1>
				<h5>{`${address.streetAddress}, ${address.city}, ${address.state} ${address.zipcode}`}</h5>
				<hr />

				{changeLocation ? (
					<>
						<p>Move your home to the correct location</p>
						<p>
							Drag pin to correct location, and the home will be
							placed there.
						</p>
						<p className="currently-selected-coordinates">
							Currently selected:{" "}
							{`${selectedPosition.lat}, ${selectedPosition.lng}`}
						</p>
					</>
				) : (
					<p>Is this an accurate location of your home?</p>
				)}
			</div>

			<ConfirmationMap
				containerStyle={containerStyle}
				selectedPosition={selectedPosition}
				setSelectedPosition={setSelectedPosition}
			/>

			<div className="confirmation-buttons">
				<button className="bttn next-page" onClick={handleSubmit}>
					{changeLocation
						? "Save and continue"
						: "Yes, it's the correct location"}
				</button>

				{changeLocation ? (
					<button
						className="bttn move-coordinates"
						onClick={handleCancel}
					>
						Cancel
					</button>
				) : (
					<button
						className="bttn move-coordinates"
						onClick={handleLocationChange}
					>
						No, let me change it
					</button>
				)}
			</div>
		</div>
	);
};

export default ConfirmLocation;
