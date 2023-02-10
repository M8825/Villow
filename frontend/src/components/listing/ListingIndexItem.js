import React from "react";
import { Link } from "react-router-dom";
import "./ListingIndexItem.css"


const ListingItem = ({ listing }) => {
    return (
        <>
            <li className="listing_item">
                <Link to={`/listings/${listing.id}`}>
                    {/* <img src={"https://photos.zillowstatic.com/fp/5f51941150e53a9cbd76dee9659474ec-cc_ft_1536.webp"} alt="" /> */}
                    <div className="listing_item__info">
                        <p>{listing.price}</p>
                        <p>{listing.address}</p>
                        <p>{listing.listing_type}</p>
                    </div>
                </Link>
            </li>
        </>
    );
};

export default ListingItem;
