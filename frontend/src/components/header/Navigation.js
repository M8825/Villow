import React from "react";
import { useEffect, useState } from "react";
import ModalContainer from "../modal/ModalContainer";
import AuthorizedUser from "./AuthorizedUser";
import ModalTabs from "../modal/ModalTabs";
import ModalWelcomeHeader from "./Welcome";

import "./Navigation.css";


const Nav = () => {
	const [userIsActive, setUserIsActive] = useState(false);

	useEffect(() => {
		const currentUser = sessionStorage.getItem("currentUser");

		if (currentUser) {
			setUserIsActive(true);
		} else {
			setUserIsActive(false);
		}
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
						<p>Github</p>
						<p>LinkedIn</p>
						<p>AngelList</p>
						<p>About</p>
					</div>
					<div className="grid-item middle"></div>
					<div className="grid-item right">
						<p>Manage Rentals</p>
						<p>Advertise</p>
						<p>Help</p>
						{userIsActive ? (
							<AuthorizedUser setUserIsActive={setUserIsActive} />
						) : (
							<ModalContainer modalAreaStyling={modalAreaStyling}>
								<ModalWelcomeHeader />
								<ModalTabs />
							</ModalContainer>
						)}
					</div>
				</nav>
				<div className="search_container">
					<h1>Find it. Tour it. Own it.</h1>
					<input
						className="search_container__search_bar"
						type="text"
						placeholder="Enter an address, neighborhood, city, or ZIP code"
					/>
					<div className="search_container__search_button"></div>
				</div>
			</div>
		</>
	);
};

export default Nav;
