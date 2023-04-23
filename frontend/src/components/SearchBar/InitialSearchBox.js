import CurrentLocationIcon from "./assets/CurrentLocationIcon";
import "./InitialSearchBox.scss";

const InitialSearchBox = ({ handleCurrentLocation }) => {
	return (
		<>
			<div
				className="empty-search-wrapper"
				onClick={handleCurrentLocation}
			>
				<CurrentLocationIcon />
				<div className="current-location">
					<p>Current Location</p>
				</div>
			</div>
		</>
	);
};

export default InitialSearchBox;
