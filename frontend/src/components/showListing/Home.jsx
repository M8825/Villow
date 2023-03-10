import React from "react";
import useCurrencyFormatter from "../utils/useCurrencyFormatter";
import { Heart, Share, Hide, More,  Logo, Building, Calendar, Heating, Cooling } from "./assets/svgs";
import { useHistory } from "react-router-dom";
import ShowMore from "./ShowMore";

const Home = ({ listing }) => {
	const formatter = useCurrencyFormatter();
	const history = useHistory();

	const listingPrice = formatter.format(listing.price);

	const listingType = () => {
		if (listing.listingType === "Sale") {
			return (
				<>
				<div className="aprt_status">
					<span className="sale" />
					<p>For Sale</p>

				</div>
				</>
			);
		} else {
			return (
				<div className="aprt_status">
					<span className="rent" />
					<p>Apartment For Rent</p>
				</div>
			);
		}
	};

	const createdTime = (timeString) => {
		const time = new Date(timeString);
		const now = new Date();
		const differenceInMilliseconds = now - time;
		const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

		return Math.floor(differenceInHours);
	};

	return (
		<>
        <div className="left-pane">
        		<header>
					<Logo />
                    <ul>
                        <li><Heart /> Save</li>
                        <li><Share /> Share</li>
                        <li><Hide /> Hide</li>
                        <li><More /> More</li>
                    </ul>
				</header>
			<div className="listing-details-wrapper">
				<div className="top-container">
					<div className="top-container__header">
						<h1>{listingPrice}</h1>
                        <div>
                        <p>
							<span>{listing.bedroom}</span> bd |
						</p>
						<p>
							<span>{listing.bathroom}</span> ba |
						</p>
						<p>
							 <span> {listing.sqft}</span> sqft
						</p>
                        </div>
					</div>
					<p>{listing.address}</p>
					{listingType(listing.listingType)}
					<p><span>Est. payment: </span>{listing.estPayment}</p>
				</div>
				<div className="follow-buttons-wrapper">
					<button className="github_btn" onClick={(e) => history.push("/listings")}>
					Github
					<p>View on Github</p>
					</button>
					<button className="linkedin_btn">LinkedIn</button>
				</div>
				<div className="listing-info">
					<div className="listing-info__header-menu">
						<ul className="menu">
							<li>Overview</li>
							<li>Facts and features</li>
							<li>Home value</li>
						</ul>

						<ul className="details">
							<li>
								{<Building />}
								{listing.buildingType}
							</li>
							<li>
								{<Calendar />}Build in {listing.builtIn}
							</li>
							<li>
								{<Heating />}
								{listing.heating
									? "Natural Gas, steam"
									: "No data"}
							</li>
							<li>
								{<Cooling />}
								{listing.ac ? "Wall unit(s)" : "No Data"}
							</li>
						</ul>
					</div>
				</div>

				<div className="overview">
                    <h1>Overview</h1>
					<div className="keywords">
						{listing.keyWords.split(",").map((keyword, idx) => {
							return <p key={idx}>{keyword}</p>;
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
						<span>{createdTime(listing.createdAt)} Hours </span>on
						Villow
					</p>{" "}
					|
					<p>
						<span>{listing.views}</span> views
					</p>{" "}
					|
				</div>
			</div>
        </div>
		</>
	);
};

export default Home;
