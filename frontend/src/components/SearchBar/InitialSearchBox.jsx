import CurrentLocationIcon from "./assets/CurrentLocationIcon";
import { getLocation, getUserCity } from "./utils/userLocation";
import { useDispatch } from "react-redux";
import { fetchSearchListings } from "../../store/listingsReducer";

import "./InitialSearchBox.scss";
import { useHistory } from "react-router-dom";

const InitialSearchBox = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleCurrentLocation = async (e) => {
        e.preventDefault();

        const userLocation = await getLocation();
        const userCity = await getUserCity(userLocation);


        dispatch(fetchSearchListings("city", userCity));
        history.push("/listings");
    };

    return (
        <>
            <div className="empty-search-wrapper" onClick={handleCurrentLocation}>
                <CurrentLocationIcon />
                <div className="current-location">
                    <p>Current Location</p>
                </div>
            </div>
        </>
    );
};

export default InitialSearchBox;
