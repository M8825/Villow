import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserFavorites, getListings } from "../../store/listingsReducer";

import ProfileCard from "./ProfileCard";

const Favorites = ({ currentUser }) => {
    const dispatch = useDispatch();

    const listings = useSelector(getListings)

    useEffect(() => {
        if (currentUser) {
            dispatch(fetchUserFavorites(currentUser.id));
        }
    }, [dispatch, currentUser])




    return listings && (
        <>
			<div className="listing-cards-wrapper">
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
}

export default Favorites;
