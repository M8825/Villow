import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { getLatLngByAddress } from "../../store/geocodeReducer";

const containerStyle = {
	width: "100%",
	height: "95.6vh",
};

const Foobar = () => {
	const dispatch = useDispatch();
	const coordinates = useSelector((state) =>
		state && state.geocode ? state.geocode.coordinates : null
	);

	const [center, setCenter] = useState({
		lat: 40.77280043151785,
		lng: -73.94798839677969,
	});

	useEffect(() => {
		const address = "514 E 82nd St New York, NY 10028";

		dispatch(getLatLngByAddress(address));
	}, []);

	return (
			<LoadScript
				googleMapsApiKey="AIzaSyDjeZ25bTcc8oOxF2TZiu9Co42kqbMKcBU"
			>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={15}
				>
					{/* Child components, such as markers, info windows, etc. */}
					<>
						<MarkerF
							position={{ lat: center.lat, lng: center.lng }}
						/>
						<MarkerF
							position={{ lat: 40.768569, lng: -73.956445 }}
						/>
						<MarkerF
							position={{ lat: 40.768569, lng: -73.961016 }}
						/>
						<MarkerF
							position={{ lat: 40.770481, lng: -73.960812 }}
						/>
					</>
				</GoogleMap>
			</LoadScript>
	);
};

export default React.memo(Foobar);
