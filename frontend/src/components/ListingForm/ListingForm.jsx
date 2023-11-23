import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import {
	createListing,
	fetchListing,
	getListing,
	updateListing,
} from "../../store/listingsReducer";

import { getActiveUser } from "../../store/usersReducer";
import Footer from "../Footer";

import uploadPhotosImg from "./assets/upload-photos.png";
import "./ListingForm.scss";

const ListingForm = ({ resultAddress, coordinates }) => {
	const history = useHistory();
	const dispatch = useDispatch();

	const { listingId } = useParams();
	const formType = listingId ? "Update post" : "Post for sale by owner";

	let listing = useSelector(getListing(listingId));

	useEffect(() => {
		if (listingId) {
			dispatch(fetchListing(listingId));
		}
	}, [dispatch, listingId]);

	const [photoFiles, setPhotoFiles] = useState([]);
	const [photoUrls, setPhotoUrls] = useState([]);

	const handleFiles = ({ currentTarget }) => {
		const files = currentTarget.files;
		setPhotoFiles(files);
		if (files.length !== 0) {
			let filesLoaded = 0;
			const urls = [];
			Array.from(files).forEach((file, index) => {
				const fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				fileReader.onload = () => {
					urls[index] = fileReader.result;
					if (++filesLoaded === files.length) setPhotoUrls(urls);
				};
			});
		} else setPhotoUrls([]);
	};

	if (!listing) {
		listing = {
			price: "",
			address: resultAddress.streetAddress,
			city: resultAddress.city,
			state: resultAddress.state,
			zipcode: resultAddress.zipcode,
			bedroom: "",
			bathroom: "",
			sqft: "",
			listing_type: "Sale",
			est_payment: "",
			building_type: "",
			built_in: "",
			price_sqft: "",
			key_words: "",
			overview: "",
			owner_id: "",
			garage: false,
			ac: false,
			heating: false,
		};
	}

	const owner = useSelector(getActiveUser());

	const [price, setPrice] = useState(listing ? listing.price : 0);
	const [address, setStreetAddress] = useState(listing.address);
	const [city, setCity] = useState(listing.city);
	const [state, setState] = useState(listing.state);
	const [zipcode, setZipCode] = useState(listing.zipcode);
	const [bedroom, setBedrooms] = useState(listing.bedroom);
	const [bathroom, setBathrooms] = useState(listing.bathroom);
	const [sqft, setSqft] = useState(listing.sqft);
	const [buildingType, setBuildingType] = useState("Apartment");
	const [builtIn, setYearBuilt] = useState(listing.builtIn);
	const [keyWords, setKeyWords] = useState(listing.keyWords);
	const [overview, setDescription] = useState(listing.overview);
	const [isGarage, setGarage] = useState(listing.garage);
	const [isAc, setAc] = useState(listing.ac);
	const [isHeating, setHeating] = useState(listing.heating);
	const [agreement, setAgreement] = useState(false);

	// TODO: Figure out the way to list renting or selling
	// const [listingType, setListingType] = useState("Sale");

	// TODO: Implement photos
	// const [photoUrl, setPhotoUrl] = useState('');

	// TODO: Set up errors
	// const [errors, setErrors] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();

		if (photoFiles.length !== 0) {
			for (let photo of photoFiles) {
				formData.append("listing[photos][]", photo);
			}
		}

		if (listingId) {
			for (let key in listing) {
				formData.append(`listing[${key}]`, listing[key]);
			}
		}

		const estPayment = (price / (30 * 12)).toFixed(2);
		const priceSqft = (price / sqft).toFixed(2);

		formData.append("listing[lat]", coordinates.lat);
		formData.append("listing[lng]", coordinates.lng);
		formData.append("listing[price]", price);
		formData.append("listing[address]", address);
		formData.append("listing[city]", city);
		formData.append("listing[state]", state);
		formData.append("listing[zipcode]", zipcode);
		formData.append("listing[bedroom]", bedroom);
		formData.append("listing[bathroom]", bathroom);
		formData.append("listing[sqft]", sqft);
		formData.append("listing[listing_type]", "Sale");
		formData.append("listing[est_payment]", estPayment);
		formData.append("listing[building_type]", buildingType);
		formData.append("listing[built_in]", builtIn);
		formData.append("listing[price_sqft]", priceSqft);
		formData.append("listing[key_words]", keyWords);
		formData.append("listing[overview]", overview);
		formData.append("listing[owner_id]", owner.id);
		formData.append("listing[garage]", isGarage);
		formData.append("listing[ac]", isAc);
		formData.append("listing[heating]", isHeating);

		if (listingId) {
			dispatch(updateListing(formData, listingId));
		} else {
			dispatch(createListing(formData));
		}

		history.push("/listings");
	};

	// TODO: add styling to input focus
	return (
		<>
			<hr />
			<div className="form-container">
				<form onSubmit={handleSubmit}>
					<br />
					<h1>For Sale By Owner Listing</h1>
					<h2 className="address-title">{`${resultAddress.streetAddress}, ${resultAddress.city}, ${resultAddress.state}, ${resultAddress.zipcode}`}</h2>
					<p className="warning">
						Post once and your home will be listed on both Villow
						and Trulia, reaching buyers on the largest real estate
						network on the Web. Plus, home shoppers receive emails
						about new homes on the market – including yours.
					</p>
					<hr />
					<label className="input-price">
						<h2>Set your price</h2>
						<input
							type="text"
							placeholder="Price"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</label>
					<hr />
					<h2>Photos</h2>
					<br />
					<div className="listing-photo-wrapper">
						<h1>My Photos</h1>
						<p>
							Drag and drop to reorder. Click on a photo to add a
							caption or delete a photo.
						</p>
						<br />
						<div className="photos-wrapper">
							<div className="attach-photos">
								<img src={uploadPhotosImg} alt="plus" />
								<p>Drag and drop photos here to upload</p>
								<br />
								<input
									className="photo-input"
									type="file"
									onChange={handleFiles}
									multiple
								/>
								<input
									className="bttn photo-upload-button"
									type="button"
									value="Add New Photo"
									onClick={(e) => {
										document
											.getElementsByClassName(
												"photo-input"
											)[0]
											.click();
									}}
								/>
								<br />
							</div>
							{Array.from(photoFiles).length !== 0 ? (
								<div className="photo-preview">
									{Array.from(photoFiles).map(
										(photo, idx) => (
											<div
												key={idx}
												className="photo-preview-item"
												style={{
													backgroundImage: `url(${URL.createObjectURL(
														photo
													)})`,
												}}
											></div>
										)
									)}
								</div>
							) : null}
						</div>
					</div>
					<h2>Home facts</h2>
					<div className="room-details">
						<label
							style={{ display: "flex", flexDirection: "column" }}
							className="home-facts"
						>
							Home type
							<select
								onChange={(e) =>
									setBuildingType(e.target.value)
								}
								value={buildingType}
							>
								<option value="Condo">Condo</option>
								<option value="Apartment">Apartment</option>
								<option value="Coop">Coop unit</option>
								<option value="Other">Other</option>
							</select>
						</label>

						<div className="quad">
							<label>
								Beds
								<input
                  id="bedroom"
									type="text"
									placeholder="0"
									value={bedroom}
									onChange={(e) =>
										setBedrooms(e.target.value)
									}
								/>
							</label>
							<label>
								Bathrooms
								<input
                  id="bathroom"
									type="text"
									placeholder="0"
									value={bathroom}
									onChange={(e) =>
										setBathrooms(e.target.value)
									}
								/>
							</label>
							<label>
								Finished square feet
								<input
                  id="sqft"
									type="text"
									placeholder="0"
									value={sqft}
									onChange={(e) => setSqft(e.target.value)}
								/>
							</label>
							<label>
								Year built
								<input
                  id="builtIn"
									type="text"
									placeholder="0"
									value={builtIn}
									onChange={(e) =>
										setYearBuilt(e.target.value)
									}
								/>
							</label>
						</div>
					</div>
					<div className="text-fields">
						<label>
							Describe your home
							<textarea
                id="overview"
								type="textarea"
								placeholder="Description"
								value={overview}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</label>

						<label>
							What I love about this home
							<textarea
                id="keyWords"
								type="textarea"
								placeholder="Key Words..."
								value={keyWords}
								onChange={(e) => setKeyWords(e.target.value)}
							/>
						</label>
					</div>
					<div className="checkmarks">
						<label>
							<input
                id="garage"
								type="checkbox"
								checked={isGarage}
								onChange={(e) => setGarage(!isGarage)}
							/>
							<p>Garage</p>
						</label>
						<label>
							<input
                id="ac"
								type="checkbox"
								checked={isAc}
								onChange={(e) => setAc(!isAc)}
							/>
							<p>Centra AC</p>
						</label>
						<label>
							<input
                id="heating"
								type="checkbox"
								checked={isHeating}
								onChange={(e) => setHeating(!isHeating)}
							/>
							<p>Central Heating</p>
						</label>
					</div>
					<label>
						<label className="terms">
							<div className="inner-check">
								<input
                  id="agreement"
									type="checkbox"
									checked={agreement}
									onChange={(e) => setAgreement(!agreement)}
									className="agreement"
								/>
								I agree to, acknowledge and understand the
								following: (i) I am (or I have authority to act
								on behalf of) the owner of this home; (ii) I
								will not provide incorrect information or state
								a ; (iii) I will be posting my property 'for
								sale by owner' on villow.com and other
								affiliated websites and that I will solely be
								responsible for maintaining and updating the
								posting and responding to and negotiating
								potential offers to purchase the property; (iv)
								Villow, Inc. ("Villow") is a licensed real
								estate brokerage, that I am not entering into
								any agency or brokerage relationship with Villow
								as part of this posting and that Villow is not
								providing me with any real estate brokerage
								services as part of this posting; and (v) I will
								comply with the Villow Terms of Use and Listing
								Quality Policy I also agree that by clicking
								below, Villow Group and its affiliates, and real
								estate professionals
								<div>
									<p>
										"Real estate professionals" includes the
										real estate agents and brokers, mortgage
										lenders and loan officers, property
										managers and other professionals you
										interact with through Villow. Villow
										Premier Agent is an advertising program
										that helps connect customers to local
										real estate professionals. Villow
										Premier Agent partners are paid
										advertisers and are not affiliated with
										Villow, Inc. brokerage or any of its
										affiliates.
									</p>
									may call or text me for marketing purposes,
									which may involve use of automated means and
									prerecorded/artificial voices. Consent is
									not a condition of buying any property,
									goods or services. Message/data rates may
									apply.
								</div>
							</div>
						</label>
					</label>
					<button
						type="submit"
						onSubmit={handleSubmit}
						disabled={!agreement}
						className="bttn post-submit"
					>
						{formType}
					</button>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default ListingForm;
