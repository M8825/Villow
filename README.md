# WELCOME TO VILLOW

Introduction

Villow Clone is a replica of the popular real estate website Zillow. Villow is a platform that allows users to buy, sell, and rent properties. It provides a comprehensive database of real estate listings, including houses, apartments, and land. Users can search for properties by location, price, and other criteria, as well as save their favorite listings and receive notifications when new properties become available. As someone who is passionate about real estate, I wanted to create a similar platform that provides users with an easy-to-use interface and a wealth of real estate information. The technologies used in this project include:


- Languages: Javascript, Ruby, HTML, and CSS
- Frontend: React-Redux
- Database: PostgreSQL
- Hosting: Heroku
- Asset Storage: AWS Simple Cloud Storage (S3)


# User Auth
A Villow user is able to create new profiles, which persist to both the front and backend.


!["auth"](./frontend/src/components/assets/auth.png)


On Villow, users can browse listings on the index page using Google Maps markers based on their address.

!["auth"](./frontend/src/components/assets/index.png)

```javascript
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { getListings, fetchListings } from "../../store/listingsReducer";
import ListingItem from "../listing/ListingIndexItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ListingsPage = () => {
	const dispatch = useDispatch();
	const listings = useSelector(getListings);
	const [reversed, setReversed] = useState(false);

	useEffect(() => {
		dispatch(fetchListings());
	}, []);

	const history = useHistory();
	const [isModalOpen, setIsModalOpen] = useState(true);

	const handleOpenModal = () => {
		setIsModalOpen(true);
		history.push("/listings/listingId");
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		history.push("/listings");
	};

	const currentUser = useSelector((state) => {
		return state.user.active;
	});

	const listingStyling = {
		flexBasis: "49%",
		maxWidth: "49%",
		height: "281px",
	};

	const thumbnailStyling = {
		height: "171px",
	};

	const handleClick = (e) => {
		e.preventDefault();
		setReversed(!reversed);
	};

	return (
		<>
			<div className="index-container">
				<div className="listing-container-header">
					<h1>Manhattan NY Real Estate & Homes For Sale</h1>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<div className="listing-container-header__btn_container">
							<button className="btn1">
								<span>{listings.length}</span> Agent listings
							</button>
							<button className="btn2">
								{" "}
								<span>0</span> Agent listings
							</button>
						</div>
						<FontAwesomeIcon
							icon={faArrowUp}
							onClick={handleClick}
						/>
					</div>
				</div>
				<div className="listings-container">
					{reversed
						? listings
								.reverse()
								.map((listing, i) => (
									<ListingItem
										key={i}
										listing={listing}
										style
										listingStyling={listingStyling}
										thumbnailStyling={thumbnailStyling}
										userId={currentUser.id}
									/>
					))
						: listings.map((listing, i) => (
								<ListingItem
									key={i}
									listing={listing}
									style
									listingStyling={listingStyling}
									thumbnailStyling={thumbnailStyling}
									userId={currentUser.id}
								/>
						  ))}
				</div>
			</div>
		</>
	);
};

export default ListingsPage;

```

Villow was created within a 14 day time frame. Thank you for your time and consideration! I hope you enjoy it!

