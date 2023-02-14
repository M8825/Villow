import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListing, fetchListing } from "../../store/listingsReducer";
import useCurrencyFormatter from "../utils/useCurrencyFormatter";
import Home from "./Home";
import "./style/home.scss"

import ModalContainer from "../modal/ModalContainer";

const ShowListing = () => {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const listing = useSelector(getListing(listingId));


    useEffect(() => {
        dispatch(fetchListing(listingId));
    }, [listingId])




    const modalAreaStyling = {
        width: "800px",
        height: "800px",
        backgroundColor: "rgb(255 255 255)",
        display: "flex",
    };


    const Gallery = () => {
        return (
            <div style={{ width: "50vw", backgroundColor: 'lightblue' }}>
                <h1>Gallery box</h1>
            </div>
        )
    };


	return (
		<>
			<ModalContainer modalAreaStyling={modalAreaStyling}>
                <Gallery />
                <Home listing={listing}/>
            </ModalContainer>
		</>
	);
};

export default ShowListing;
