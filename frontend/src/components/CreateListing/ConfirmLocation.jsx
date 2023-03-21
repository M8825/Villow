import React, { useState } from "react";
import { GoogleMap, MarkerF, LoadScript } from "@react-google-maps/api";
import "./ConfirmLocation.scss";

const ConfirmLocation = ({ address, coordinates }) => {
	const containerStyle = {
		width: "1240px",
		height: "600px",
	};

	const [selectedPosition, setSelectedPosition] = useState(coordinates);

	const handleDragEnd = (e) => {
		setSelectedPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
	};

	return (
		<div className="confirm-location-map-container">
			<div className="header-for-sale">
				<h1>For Sale by Owner Listing</h1>
				<h5>{`${address.streetAddress}, ${address.city}, ${address.state} ${address.zipcode}`}</h5>
				<hr />
				<p>Is this an accurate location of your home?</p>
			</div>

			<div className="confirm-location-map-wrapper">
			<LoadScript googleMapsApiKey="AIzaSyC4MyCm15p_Wxa7e-P1rYMgEWstpZXorSA">
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={coordinates}
					zoom={25}
				>
					<>
						<MarkerF
							position={{
								lat: selectedPosition.lat,
								lng: selectedPosition.lng,
							}}
							draggable={true}
							onDragEnd={handleDragEnd}
						/>
					</>
				</GoogleMap>
			</LoadScript>
			</div>
		</div>
	);
};

export default ConfirmLocation;
