import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createListing } from "../../store/listingsReducer";


const CreateListing = () => {
    const dispatch = useDispatch();
    const owner = useSelector(state => {

        debugger
        return state.user.active.id
    });

	const [price, setPrice] = useState(0);
	const [address, setStreetAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipcode, setZipCode] = useState("");
	const [bedroom, setBedrooms] = useState(0);
	const [bathroom, setBathrooms] = useState(0);
	const [sqft, setSqft] = useState(0);
    const [buildingType, setBuildingType] = useState("Apartment");
    const [builtIn, setYearBuilt] = useState(0);
	const [keyWords, setKeyWords] = useState("");
	const [overview, setDescription] = useState("");
	const [garage, setGarage] = useState({ isChecked: false });
	const [ac, setAc] = useState({ isChecked: false });
	const [heating, setHeating] = useState({ isChecked: false });
    // TODO: Figure out the way to list renting or selling
	// const [listingType, setListingType] = useState("Sale");

	// TODO: Implement photos
	// const [photoUrl, setPhotoUrl] = useState('');

    // TODO: Set up errors
	const [errors, setErrors] = useState([]);

	const handleSubmit = (e) => {
		// DOING: implement
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
            garage: garage.isChecked,
            ac: ac.isChecked,
            heating: heating.isChecked,
        }

        debugger

        dispatch(createListing(newListing))
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					Price
					<input
						type="text"
						placeholder="Price"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</label>

				<h1> HERE should be my photos</h1>

				<label>
					Street address
					<input
						type="text"
						placeholder="Street address"
						onChange={(e) => setStreetAddress(e.target.value)}
						value={address}
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

				<h2>Home facts</h2>
				<label style={{ display: "flex", flexDirection: "column" }}>
					Home type
					<select
						onChange={(e) => setBuildingType(e.target.value)}
						value={buildingType}
					>
						<option value="Condo">Condo</option>
						<option value="Apartment">Apartment</option>
						<option value="Coop">Coop unit</option>
						<option value="Other">Other</option>
					</select>
				</label>

				<label>
					Beds
					<input
						type="text"
						placeholder="0"
						value={bedroom}
						onChange={(e) => setBedrooms(e.target.value)}
					/>
				</label>
				<label>
					Bathrooms
					<input
						type="text"
						placeholder="0"
						value={bathroom}
						onChange={(e) => setBathrooms(e.target.value)}
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
				<br />
				<label>
					Year built
					<input
						type="text"
						placeholder="0"
						value={builtIn}
						onChange={(e) => setYearBuilt(e.target.value)}
					/>
				</label>

				<br />
				<label>
					Describe your home
					<textarea
						type="textarea"
						placeholder=""
						value={overview}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>

				<label>
					What I love about this home
					<textarea
						type="textarea"
						placeholder="Words..."
						value={keyWords}
						onChange={(e) => setKeyWords(e.target.value)}
					/>
				</label>

				<label>
					Garage
					<input
						type="checkbox"
						checked={garage.isChecked}
						onChange={(e) =>
							setGarage({ isChecked: e.target.checked })
						}
					/>
				</label>
				<label>
					Centra AC
					<input
						type="checkbox"
						checked={ac.isChecked}
						onChange={(e) => setAc({ isChecked: e.target.checked })}
					/>
				</label>
				<label>
					Central Heating
					<input
						type="checkbox"
						checked={heating.isChecked}
						onChange={(e) =>
							setHeating({ isChecked: e.target.checked })
						}
					/>
				</label>
				<button onSubmit={handleSubmit}>Submit</button>
			</form>
		</>
	);
};

export default CreateListing;
