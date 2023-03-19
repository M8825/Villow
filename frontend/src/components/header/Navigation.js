import React from "react";
import { useEffect, useState } from "react";
import ModalContainer from "../Modal/ModalContainer";
import AuthorizedUser from "./AuthorizedUser";
import ModalTabs from "../Modal/ModalTabs";
import ModalWelcomeHeader from "./Welcome";
import { Link } from "react-router-dom";
import Layout from "../Cards";
import Footer from "../Footer";

import ListingsCarousel from "../ListingsCarousel/ListingsCarousel";
import villow from "../assets/villow.png";

import "./Navigation.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser, getActiveUser } from "../../store/usersReducer";

const Navigation = ({ isIndex }) => {
	const dispatch = useDispatch();
	const activeUser = useSelector(getActiveUser());

	useEffect(() => {
		dispatch(fetchCurrentUser());
	}, []);

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
						<a href="https://github.com/M8825">Github</a>
						<a href="https://www.linkedin.com/in/malkhaz-mamulashvili-703a97208/">
							LinkedIn
						</a>
						<a href="https://wellfound.com/u/malkhaz-mamulashvili">
							Wellfound
						</a>
						<a href="#">About</a>
					</div>
					<Link
						to="/"
						render={() => {
							return (
								<>
									<Navigation />
									<ListingsCarousel
										header={"Homes For You in New York, NY"}
										paragraph={"Based on your view history"}
									/>
									<Layout />
									<ListingsCarousel
										header={
											"Trending Homes in New York, NY"
										}
										paragraph={
											"Popular listings in the area"
										}
									/>
									<ListingsCarousel
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

export default Navigation;
