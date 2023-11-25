import React from "react";
import useCurrencyFormatter from "../utils/useCurrencyFormatter";
import {
  Building,
  Calendar,
  Info,
  HOA,
  SQFT,
  SQFTLOT,
  ZESTIMATE,
} from "./assets/svgs";

import ShowMore from "./ShowMore";
import Map from "../Map/map";

import "./style/home.scss";

const Home = ({ listing }) => {
  const formatter = useCurrencyFormatter();

  const listingPrice = formatter.format(listing?.price);

  const createdTime = (timeString) => {
    const time = new Date(timeString);
    const now = new Date();
    const differenceInMilliseconds = now - time;
    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

    return Math.floor(differenceInHours);
  };

  return (
    <div className="home-container">
      <div className="left-pane">
        <div className="listing-details-wrapper">
          <div className="top-container">
            <div className="top-container__header">
              <div className="right-header">
                <h1>{listingPrice}</h1>
                <p className="show-address">{`${listing.address}, ${listing.city}, ${listing.state} ${listing.zipcode}`}</p>
              </div>

              <div className="left-header">
                <p>
                  <span>{listing.bedroom}</span> beds
                </p>
                <p>
                  <span>{listing.bathroom}</span> baths
                </p>
                <p>
                  <span> {listing.sqft}</span> sqft
                </p>
              </div>
            </div>
            <div className="est-payment-container">
              <div className="est-payment">
                Est. payment:&nbsp;<span>{"$" + listing.estPayment}/mo</span>{" "}
                <Info /> <span className="info-link">Get pre-qualified</span>
              </div>
            </div>
          </div>
          <div className="listing-info">
            <div className="listing-info__header-menu">
              <ul className="details">
                <li>
                  {<Building />}
                  {listing.buildingType}
                </li>
                <li>
                  {<ZESTIMATE />} {listingPrice}
                  <span>
                    Vestimate<sup>®</sup>
                  </span>
                </li>
                <li>
                  {<Calendar />}Built in {listing.builtIn}
                </li>
                <li>
                  {<SQFT />} ${listing.sqft}/sqft
                </li>
                <li>{<SQFTLOT />} -- sqft lot</li>
                <li>{<HOA />} $-- HOA</li>
              </ul>
            </div>
          </div>

          <div className="overview">
            <h1>What's Special</h1>
            <div className="keywords">
              {listing.keyWords.length > 0 &&
                listing.keyWords.split(" ").map((keyword, idx) => {
                  if (keyword) {
                    return <p key={idx}>{keyword}</p>;
                  }
                })}
            </div>

            <p>
              Listed by: <span>{listing.listingBy}</span>
            </p>
            <div>
              <ShowMore text={listing.overview} />
            </div>
          </div>

          <div className="line-footer">
            <p>
              <span>{createdTime(listing.createdAt)} Hours </span>on Villow
            </p>{" "}
            |
            <p>
              <span>{listing.views}</span> views
            </p>{" "}
            |
          </div>
        </div>
        <div className="show-page-map-container">
          <Map listingId={listing.id} />
        </div>
      </div>
      <div className="right-side-container">
        <div className="follow-buttons-wrapper">
          <button
            className="github_btn"
            onClick={(e) => (window.location.href = "https://github.com/M8825")}
          >
            Github
            <p>View on Github</p>
          </button>
          <button
            className="linkedin_btn"
            onClick={(e) =>
              (window.location.href =
                "https://www.linkedin.com/in/malkhaz-mamulashvili-703a97208/")
            }
          >
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
