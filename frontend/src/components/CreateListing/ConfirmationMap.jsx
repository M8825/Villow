import { LoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import IndexMapConfig from "../Map/IndexMapConfig.json";

const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

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
			<LoadScript googleMapsApiKey={MAPS_API_KEY}>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={selectedPosition}
					zoom={20}
					options={{
						disableDefaultUI: true,
						styles: IndexMapConfig,
					}}
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
