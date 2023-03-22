import { LoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";

const ConfirmationMap = ({
	containerStyle,
	selectedPosition,
	setSelectedPosition,
}) => {
	const handleDragEnd = (e) => {
		setSelectedPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
	};

	return (
		<div className="confirm-location-map-wrapper">
			<LoadScript googleMapsApiKey="AIzaSyC4MyCm15p_Wxa7e-P1rYMgEWstpZXorSA">
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={selectedPosition}
					zoom={20}
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
	);
};

export default ConfirmationMap;
