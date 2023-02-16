import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	createListing,
	fetchListing,
	updateListing,
	getListing,
} from "../../store/listingsReducer";

import Nav from "../header/Navigation";
import "./style/create_listing.scss";

const CreateListing = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { listingId } = useParams();
	const formType = listingId ? "Update post" : "Post for sale by owner";

	let listing = useSelector(getListing(listingId));

	useEffect(() => {
		if (listingId) {
			dispatch(fetchListing(listingId));
		}
	}, [dispatch, listingId]);

	if (!listing) {
		listing = {
			price: "",
			address: "",
			city: "",
			state: "",
			zipcode: "",
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

	const owner = useSelector((state) => {
		return state.user.active.id;
	});

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

	// TODO: Figure out the way to list renting or selling
	// const [listingType, setListingType] = useState("Sale");

	// TODO: Implement photos
	// const [photoUrl, setPhotoUrl] = useState('');

	// TODO: Set up errors
	// const [errors, setErrors] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (listingId) {
			let newListing = { ...listing };
			newListing.price = price;
			newListing.address = address;
			newListing.city = city;
			newListing.state = state;
			newListing.zipcode = zipcode;
			newListing.bedroom = bedroom;
			newListing.bathroom = bathroom;
			newListing.sqft = sqft;
			newListing.building_type = buildingType;
			newListing.built_in = builtIn;
			newListing.key_words = keyWords;
			newListing.overview = overview;
			newListing.owner_id = owner;
			newListing.garage = isGarage;
			newListing.ac = isAc;
			newListing.heating = isHeating;

			dispatch(updateListing(newListing));
		} else {
			const estPayment = (price / (30 * 12)).toFixed(2);
			const priceSqft = (price / sqft).toFixed(2);
			const newListing = {
				price,
				address,
				city,
				state,
				zipcode,
				bedroom,
				bathroom,
				sqft,
				listing_type: "Sale",
				est_payment: estPayment,
				building_type: buildingType,
				built_in: builtIn,
				price_sqft: priceSqft,
				key_words: keyWords,
				overview,
				owner_id: owner,
				garage: isGarage,
				ac: isAc,
				heating: isHeating,
			};

			dispatch(createListing(newListing));
		}

		history.push("/listings");
	};
	// TODO: add styling to input focus

	return (
		<>
			{/* TODO: It's not index page but we still call this isIndex. change it to something abstract */}
			<Nav isIndex={true} />
			<hr />
			<div className="form-container">
				<form onSubmit={handleSubmit}>
					<br />
					<h1>For Sale By Owner Listing</h1>
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

					<h1 className="photos"> HERE should be my photos</h1>

					<div className="streetAddress">
						<label>
							Street address
							<input
								type="text"
								onChange={(e) =>
									setStreetAddress(e.target.value)
								}
								placeholder="Street address"
								value={address}
								className="input-address"
							/>
						</label>

						<label>
							City
							<input
								type="text"
								placeholder="City"
								value={city}
								onChange={(e) => setCity(e.target.value)}
							/>
						</label>

						<label>
							State
							<input
								type="text"
								placeholder="State"
								value={state}
								onChange={(e) => setState(e.target.value)}
							/>
						</label>

						<label>
							Zip code
							<input
								type="text"
								placeholder="Zip code"
								value={zipcode}
								onChange={(e) => setZipCode(e.target.value)}
							/>
						</label>
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
									type="text"
									placeholder="0"
									value={sqft}
									onChange={(e) => setSqft(e.target.value)}
								/>
							</label>
							<label>
								Year built
								<input
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
								type="textarea"
								placeholder="Description"
								value={overview}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</label>

						<label>
							What I love about this home
							<textarea
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
								type="checkbox"
								checked={isGarage}
								onChange={(e) => setGarage(true)}
							/>
							<p>Garage</p>
						</label>
						<label>
							<input
								type="checkbox"
								checked={isAc}
								onChange={(e) => setAc(true)}
							/>
							<p>Centra AC</p>
						</label>
						<label>
							<input
								type="checkbox"
								checked={isHeating}
								onChange={(e) => setHeating(true)}
							/>
							<p>Central Heating</p>
						</label>
					</div>

					<label>
						<label className="terms">
							<div className="inner-check">
							<input type="checkbox" className="agreement" />
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
					<button onSubmit={handleSubmit} className="sbmt-btn">
						{formType}
					</button>
				</form>
			</div>
		</>
	);
};

export default CreateListing;
