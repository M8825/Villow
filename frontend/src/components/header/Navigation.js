import React from "react";
import { useEffect, useState } from "react";
import ModalContainer from "../modal/ModalContainer";
import AuthorizedUser from "./AuthorizedUser";
import ModalTabs from "../modal/ModalTabs";
import ModalWelcomeHeader from "./Welcome";
import { Link } from "react-router-dom";
import Layout from "../cards";
import Footer from "../footer";
import ListingIndex from "../listing/";
import villow from "../assets/villow.png";

import "./Navigation.css";
import { useSelector } from "react-redux";
import { getActiveUser } from "../../store/usersReducer";

const Nav = ({ isIndex }) => {

	const activeUser = useSelector(getActiveUser());

	// const [userIsActive, setUserIsActive] = useState(false);

	// useEffect(() => {
	// 	const currentUser = sessionStorage.getItem("currentUser");

	// 	if (currentUser) {
	// 		setUserIsActive(true);
	// 	} else {
	// 		setUserIsActive(false);
	// 	}
	// }, []);

	const modalAreaStyling = {
		display: "flex",
		flexDirection: "column",
		padding: "27px 16px 14px 16px",
		borderRadius: "10px",
		width: "456px",
		backgroundColor: "rgb(255 255 255)",
	};

	return (
		<>
			<div className="container">
				<nav id="navigation">
					<div className="grid-item left">
						<p>Github</p>
						<p>LinkedIn</p>
						<p>AngelList</p>
						<p>About</p>
					</div>
					<Link
						to="/"
						render={() => {
							return (
								<>
									<Nav />
									<ListingIndex
										header={"Homes For You in New York, NY"}
										paragraph={"Based on your view history"}
									/>
									<Layout />
									<ListingIndex
										header={
											"Trending Homes in New York, NY"
										}
										paragraph={
											"Popular listings in the area"
										}
									/>
									<ListingIndex
										header={
											"Selling Soon Homes in New York, NY"
										}
										paragraph={
											"Likely to sell faster than 80% of homes nearby"
										}
									/>
									<Footer />
								</>
							);
						}}
					>
						<div
							className="grid-item middle"
							style={{ width: "200px", height: "10px" }}
						>
							<img
								src={villow}
								alt="villow"
								style={{ marginTop: "10px" }}
							/>
						</div>
					</Link>
					<div className="grid-item right">
						<p>Manage Rentals</p>
						<p>Advertise</p>
						<p>Help</p>
						{activeUser ? (
							<AuthorizedUser />
						) : (
							<ModalContainer
								modalAreaStyling={modalAreaStyling}
								ModalWelcomeHeader={ModalWelcomeHeader}
								ModalTabs={ModalTabs}
							/>
						)}
					</div>
				</nav>
				{!isIndex && (
					<div className="search_container">
						<h1>Find it. Tour it. Own it.</h1>
						<input
							className="search_container__search_bar"
							type="text"
							placeholder="Enter an address, neighborhood, city, or ZIP code"
						/>
						<div className="search_container__search_button"></div>
					</div>
				)}
			</div>
		</>
	);
};

export default Nav;
