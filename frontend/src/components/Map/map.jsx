import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";
import { getLatLngByAddress } from "../../store/geocodeReducer";
import IndexMapConfig from "./IndexMapConfig.json";

import { getListing, getListings } from "../../store/listingsReducer";
import { formatNumberToK, containerStyle } from "./mapsUtils";
import createMarkerIcon from "./marker";

import "./map.scss";

const Map = ({ listingId }) => {
	const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
	const dispatch = useDispatch();
	const allListings = useSelector(getListings);
	const singleListing = useSelector(getListing(listingId));

	// determine which listing to render on the map
	// if listingId is present, we assume that render the single listing
	const listings = useMemo(() => {
		return listingId ? [singleListing] : allListings;
	}, [listingId, singleListing, allListings]);

	const [center, setCenter] = useState();
	const [hoveredMarkerId, setHoveredMarkerId] = useState(null); // track hovered marker
	const [mapsApiLoaded, setMapsApiLoaded] = useState(false); // state to track if the google maps api has loaded

	useEffect(() => {
		if (listings.length > 0) {
			setCenter({
				lat: listings[0].lat,
				lng: listings[0].lng,
			});
		}
	}, [listings]);

	useEffect(() => {
		const address = "514 E 82nd St New York, NY 10028";

		dispatch(getLatLngByAddress(address));
	}, []);

	const handleMouseOver = (listingId) => {
		setHoveredMarkerId(listingId);
	};

	const handleMouseOut = () => {
		setHoveredMarkerId(null);
	};

	const onMapLoad = () => {
		setMapsApiLoaded(true);
	};

	return (
		<div className="map_container">
			<LoadScriptNext googleMapsApiKey={`${MAPS_API_KEY}`} onLoad={onMapLoad}>
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
					{mapsApiLoaded &&
						listings &&
						listings.map((listing) => {
							return (
								<Marker
									key={listing.id}
									icon={{
										url: createMarkerIcon(
											formatNumberToK(listing.price),
											hoveredMarkerId === listing.id ? "green" : "red"
										),
										scaledSize: new window.google.maps.Size(45, 23),
									}}
									position={{ lat: listing.lat, lng: listing.lng }}
									onMouseOver={() => handleMouseOver(listing.id)}
									onMouseOut={handleMouseOut}
								/>
							);
						})}
				</GoogleMap>
			</LoadScriptNext>
		</div>
	);
};

export default React.memo(Map);
