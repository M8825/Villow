import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { getLatLngByAddress } from "../../store/geocodeReducer";

const containerStyle = {
	width: "100%",
	height: "87vh",
};

const Map = () => {
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
		<LoadScript googleMapsApiKey="AIzaSyDjeZ25bTcc8oOxF2TZiu9Co42kqbMKcBU">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={15}
			>
				{/* Child components, such as markers, info windows, etc. */}
				<>
					<MarkerF position={{ lat: center.lat, lng: center.lng }} />
					<MarkerF position={{ lat: 40.768569, lng: -73.956445 }} />
					<MarkerF position={{ lat: 40.768569, lng: -73.961016 }} />
					<MarkerF position={{ lat: 40.770481, lng: -73.960812 }} />
					<MarkerF position={{ lat: 40.777254, lng: -73.956873 }} />
					<MarkerF position={{ lat: 40.777254, lng: -73.956873 }} />
					<MarkerF position={{ lat: 40.77648, lng: -73.96029 }} />
					<MarkerF position={{ lat: 40.775017, lng: -73.952093 }} />
					<MarkerF position={{ lat: 40.775082, lng: -73.95805 }} />
					<MarkerF position={{ lat: 40.77154, lng: -73.954153 }} />
					<MarkerF position={{ lat: 40.774237, lng: -73.962092 }} />
					<MarkerF position={{ lat: 40.774237, lng: -73.964152 }} />
					<MarkerF position={{ lat: 40.774692, lng: -73.959861 }} />
					<MarkerF position={{ lat: 40.776025, lng: -73.959646 }} />
					<MarkerF position={{ lat: 40.77011, lng: -73.952822 }} />
					<MarkerF position={{ lat: 40.773685, lng: -73.95102 }} />
					<MarkerF position={{ lat: 40.775505, lng: -73.949175 }} />
					<MarkerF position={{ lat: 40.776382, lng: -73.9572 }} />
					<MarkerF position={{ lat: 40.777032, lng: -73.958831 }} />
					<MarkerF position={{ lat: 40.775342, lng: -73.954754 }} />
					<MarkerF position={{ lat: 40.774172, lng: -73.946342 }} />
					<MarkerF position={{ lat: 40.777032, lng: -73.957972 }} />
					<MarkerF position={{ lat: 40.77726, lng: -73.960376 }} />
					<MarkerF position={{ lat: 40.77154, lng: -73.953852 }} />
					<MarkerF position={{ lat: 40.771345, lng: -73.952307 }} />
					<MarkerF position={{ lat: 40.77687, lng: -73.945012 }} />
					<MarkerF position={{ lat: 40.77687, lng: -73.945012 }} />
					<MarkerF position={{ lat: 40.783874, lng: -73.957092 }} />
					<MarkerF position={{ lat: 40.783288, lng: -73.949803 }} />
					<MarkerF position={{ lat: 40.779152, lng: -73.961435 }} />
					<MarkerF position={{ lat: 40.77476, lng: -73.963385 }} />
					<MarkerF position={{ lat: 40.77476, lng: -73.963385 }} />
					<MarkerF position={{ lat: 40.773831, lng: -73.950778 }} />
					<MarkerF position={{ lat: 40.771972, lng: -73.948881 }} />
					<MarkerF position={{ lat: 40.771972, lng: -73.948881 }} />
					<MarkerF position={{ lat: 40.774841, lng: -73.956032 }} />
					<MarkerF position={{ lat: 40.774841, lng: -73.956032 }} />
					<MarkerF position={{ lat: 40.774841, lng: -73.956032 }} />
					<MarkerF position={{ lat: 40.774661, lng: -73.959278 }} />
					<MarkerF position={{ lat: 40.773306, lng: -73.951791 }} />
					<MarkerF position={{ lat: 40.77256, lng: -73.948826 }} />
					<MarkerF position={{ lat: 40.773019, lng: -73.956726 }} />
					<MarkerF position={{ lat: 40.773506, lng: -73.952745 }} />
					<MarkerF position={{ lat: 40.77254, lng: -73.954273 }} />
					<MarkerF position={{ lat: 40.773237, lng: -73.962212 }} />
					<MarkerF position={{ lat: 40.773237, lng: -73.964272 }} />
					<MarkerF position={{ lat: 40.773692, lng: -73.959981 }} />
					<MarkerF position={{ lat: 40.775025, lng: -73.959766 }} />
					<MarkerF position={{ lat: 40.76911, lng: -73.952942 }} />
					<MarkerF position={{ lat: 40.772685, lng: -73.95114 }} />
					<MarkerF position={{ lat: 40.774505, lng: -73.949295 }} />
					<MarkerF position={{ lat: 40.775382, lng: -73.95732 }} />
					<MarkerF position={{ lat: 40.776032, lng: -73.958951 }} />
					<MarkerF position={{ lat: 40.774342, lng: -73.954874 }} />
					<MarkerF position={{ lat: 40.773172, lng: -73.946462 }} />
					<MarkerF position={{ lat: 40.776032, lng: -73.958102 }} />
					<MarkerF position={{ lat: 40.77626, lng: -73.960506 }} />
					<MarkerF position={{ lat: 40.77254, lng: -73.953984 }} />
					<MarkerF position={{ lat: 40.772345, lng: -73.952439 }} />
					<MarkerF position={{ lat: 40.77787, lng: -73.945142 }} />
					<MarkerF position={{ lat: 40.77787, lng: -73.945142 }} />
					<MarkerF position={{ lat: 40.784874, lng: -73.957222 }} />
					<MarkerF position={{ lat: 40.784288, lng: -73.949933 }} />
					<MarkerF position={{ lat: 40.780152, lng: -73.961565 }} />
					<MarkerF position={{ lat: 40.77576, lng: -73.963515 }} />
					<MarkerF position={{ lat: 40.77576, lng: -73.963515 }} />
					<MarkerF position={{ lat: 40.774831, lng: -73.956652 }} />
					<MarkerF position={{ lat: 40.774831, lng: -73.956652 }} />
					<MarkerF position={{ lat: 40.774831, lng: -73.956652 }} />
					<MarkerF position={{ lat: 40.774651, lng: -73.959898 }} />
					<MarkerF position={{ lat: 40.773296, lng: -73.952411 }} />
					<MarkerF position={{ lat: 40.77255, lng: -73.949446 }} />
					<MarkerF position={{ lat: 40.773009, lng: -73.957346 }} />
					<MarkerF position={{ lat: 40.773496, lng: -73.953365 }} />

				</>
			</GoogleMap>
		</LoadScript>
	);
};

export default React.memo(Map);
