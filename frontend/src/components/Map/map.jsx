import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleMap, LoadScriptNext, MarkerF } from "@react-google-maps/api";
import { getLatLngByAddress } from "../../store/geocodeReducer";
import IndexMapConfig from "./IndexMapConfig.json"

import "./map.scss"
import { getListings } from "../../store/listingsReducer";
import { list } from "@chakra-ui/react";

const containerStyle = {
	width: "100%",
	height: "100vh",
};


const Map = () => {
	const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
	const dispatch = useDispatch();

	const listings = useSelector(getListings);

	const [center, setCenter] = useState();

  useEffect(() => {
        if (listings.length > 0) {
            setCenter({
                lat: listings[0].lat,
                lng: listings[0].lng
            });
        }
    }, [listings]); // Only re-run the effect if listings changes


	useEffect(() => {
		const address = "514 E 82nd St New York, NY 10028";

		dispatch(getLatLngByAddress(address));
	}, []);

	return (
		<div className="map_container">
			<LoadScriptNext googleMapsApiKey={`${MAPS_API_KEY}`}>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={15}
					options={{
						disableDefaultUI: true,
						styles: IndexMapConfig,
						draggable: true,
					}}
				>
						{listings.map((listing) => {
							return <MarkerF key={listing.id} position={{ lat: listing["lat"], lng: listing["lng"] }}/>
						})}
				</GoogleMap>
			</LoadScriptNext>
		</div>
	);
};

export default React.memo(Map);
