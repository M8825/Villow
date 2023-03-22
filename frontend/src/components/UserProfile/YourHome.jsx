import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveUser } from "../../store/usersReducer";
import { fetchListing } from "../../store/listingsReducer";
import Card from "../Cards/Card";

const YourHome = ()  => {
    const dispatch = useDispatch();

    const currentUser = useSelector(getActiveUser());

    useEffect(() => {
        if (currentUser) {
            // fetch listings from backend
            dispatch(fetchListing(currentUser.id))
        }
    })

    return (
        <Card />
    )

}

export default YourHome;
