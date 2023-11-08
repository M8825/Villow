import Geocode from "react-geocode";

const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const RECEIVE_LAT_LNG = "geocode/RECEIVE_LAT_LNG";

const receiveLatLng = (coordinates) => ({
    type: RECEIVE_LAT_LNG,
    coordinates,
});

export const getLatLngByAddress = (address) => async (dispatch) =>  {
	try {
		Geocode.setApiKey(`${MAPS_API_KEY}`);
		const response = await Geocode.fromAddress(address);

        if (response.status === "OK") {
            const { lat, lng } = response.results[0].geometry.location;
            dispatch(receiveLatLng({ lat, lng }));
        }

	} catch (error) {
		console.error(error);
	}
};



const geocodeReducer = (state = {}, action) => {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_LAT_LNG:
            newState.geocode = action.coordinates;
            return newState;
        default:
            return newState
    };

}


export default geocodeReducer;
