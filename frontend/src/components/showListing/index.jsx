import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListing, fetchListing } from "../../store/listingsReducer";
import Gallery from "./gallery";
import Home from "./Home";
import "./style/home.scss"

import ModalContainer from "../modal/ModalContainer";

const ShowListing = ({isOpen, onClose}) => {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const listing = useSelector(getListing(listingId));


    useEffect(() => {
        dispatch(fetchListing(listingId));
    }, [dispatch, listingId])


    const modalAreaStyling = {
        width: "68vw",
        height: "100vh",
        backgroundColor: "rgb(255 255 255)",
        display: "flex",
    };


	return (
		<>
			<ModalContainer modalAreaStyling={modalAreaStyling} isOpen={isOpen} onClose={onClose}>
                <Gallery listing={listing}/>
                <Home listing={listing}/>
            </ModalContainer>
		</>
	);
};

export default ShowListing;
