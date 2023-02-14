import { list } from "@chakra-ui/react";
import React from "react";
import useCurrencyFormatter from "../utils/useCurrencyFormatter";

const Home = ({ listing }) => {
    const formatter = useCurrencyFormatter();

    const listingPrice = formatter.format(listing.price);


    const listingType = () => {
        if (listing.listingType === "sale") {
            return <p>For Sale</p>;
        } else {
            return <p>Apartment For Rent</p>;
        }
    };

	return (
		<div className="top-container"  style={{ width: "50vw" }}>
            <div className="top-container__header">
			    <h1>{listingPrice}</h1>
                <p><span>{listing.bedroom}</span> bd |</p>
                <p><span>{listing.bathroom}</span> ba |</p>
                <p><span>{listing.sqft}</span> sqft</p>
            </div>
			<p>{listing.address}</p>
            <span className="saleOrRent"/>{listingType(listing.listingType)}
		</div>
	);
};

export default Home;
