import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import ListingItem from "../ListingItem/ListingItem";

import { getFilter } from "../../store/searchFilters";
import {
  getListings,
  fetchSearchListings,
  clearAllListings,
} from "../../store/listingsReducer";

import "./Listings.scss";

const Listings = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter());
  const listings = useSelector(getListings);

  const [reversed, setReversed] = useState(false);

  // Fetch listings from database based on the search search filters
  // on filter change
  useEffect(() => {
    dispatch(fetchSearchListings());

    // Clean up listings
    return () => {
      dispatch(clearAllListings());
    };
  }, [filter]);

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
          <h1>Real Estate & Homes For Sale</h1>
          <FontAwesomeIcon
            className="arrow-icon"
            icon={faArrowUp}
            onClick={handleClick}
          />
        </div>
        <div className="listings-container">
          {reversed
            ? listings
                .reverse()
                .map((listing, i) => (
                  <ListingItem
                    key={i}
                    listing={listing}
                    listingStyling={listingStyling}
                    thumbnailStyling={thumbnailStyling}
                  />
                ))
            : listings.map((listing, i) => (
                <ListingItem
                  key={i}
                  listing={listing}
                  listingStyling={listingStyling}
                  thumbnailStyling={thumbnailStyling}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default Listings;
