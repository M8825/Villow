import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserFavorites, getFavorites } from "../../store/listingsReducer";

import ProfileCard from "./ProfileCard";

const Favorites = ({ currentUser }) => {
	const dispatch = useDispatch();

	const listings = useSelector(getFavorites);

	useEffect(() => {
		if (currentUser) {
			dispatch(fetchUserFavorites(currentUser.id));
		}
	}, [dispatch, currentUser]);

	return (
		listings && (
			<>
				<div className="header-wrapper">
					<h1 className="your-home-title">Favorites</h1>
				</div>

				<div className="listing-cards-wrapper">
                    {/* NOTE(mlkz): Profile cards still have select check-mark in favorites tab
                        because I want to implement compare feature in the future.
                      */}
					{listings.map((listing) => (
						<ProfileCard
							key={listing.id}
							listingId={listing.id}
							listing={listing}
							className="card"
						/>
					))}
				</div>
			</>
		)
	);
};

export default Favorites;
