import SelectedState from "./SelectedState";

const GrabAddressForm = ({
	address,
	handleAddressChange,
	errors,
	handleSubmit,
}) => {
	return (
		<div className="address-input-wrapper">
			<form className="address-input">
				<div className="trapezoid-wrapper">
					<div className="rectangle">
						<p>Post a For Sale by Owner Listing</p>
					</div>
					<div className="trapezoid"></div>
				</div>
				<div
					className={`grab-address ${
						errors.isSet ? "errors-set" : ""
					}`}
				>
					<div
						className={`input-wrapper ${
							errors.isSet && errors.streetAddress
								? "error-set"
								: ""
						}`}
					>
						<input
							type="text"
							onChange={(e) =>
								handleAddressChange(e, "streetAddress")
							}
							placeholder="Street address"
							value={address.streetAddress}
						/>

						<p>{errors.isSet && errors.streetAddress}</p>
					</div>

					<div className="input-wrapper">
						<input
							type="text"
							onChange={(e) => handleAddressChange(e, "unit")}
							placeholder="Unit# (optional)"
							value={address.unit}
						/>
						<p>{errors.isSet && " "}</p>
					</div>

					<div
						className={`input-wrapper ${
							errors.isSet && errors.city ? "error-set" : ""
						}`}
					>
						<input
							type="text"
							placeholder="City"
							value={address.city}
							onChange={(e) => handleAddressChange(e, "city")}
						/>
						<p>{errors.isSet && errors.city}</p>
					</div>

					<div
						className={`input-wrapper ${
							errors.isSet && errors.state ? "error-set" : ""
						}`}
					>
						<SelectedState
							handleAddressChange={handleAddressChange}
						/>
						<p>{errors.isSet && errors.state}</p>
					</div>

					<div
						className={`input-wrapper ${
							errors.isSet && errors.zipcode ? "error-set" : ""
						}`}
					>
						<input
							type="text"
							placeholder="Zip code"
							value={address.zipcode}
							onChange={(e) => handleAddressChange(e, "zipcode")}
						/>
						<p>{errors.isSet && errors.zipcode}</p>
					</div>

					<div className="input-wrapper">
						<button
							className="submit-btn"
							type="submit"
							onClick={handleSubmit}
						>
							Continue
						</button>
					</div>
				</div>
			</form>
			<h2>Why post on Villow?</h2>
			<div className="address-input-bottom">
				<div className="description-items">
					<div className="home-image"></div>
					<h5>
						Post a listing for free, including video and unlimited
						photos.
					</h5>
				</div>
				<div className="description-items">
					<div className="rupor-image"></div>
					<h5>
						Your home will be listed on Villow and Trulia, reaching
						the largest audience of home shoppers on the Web.
					</h5>
				</div>
				<div className="description-items">
					<div className="check-mark"></div>
					<h5>
						Home shoppers receive instant emails about new listings.
					</h5>
				</div>
			</div>
		</div>
	);
};

export default GrabAddressForm;
