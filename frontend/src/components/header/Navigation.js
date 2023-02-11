import React from "react";
import { useEffect, useState } from "react";
import SessionContainer from "../modal/ModalContainer";
import AuthorizedUser from "./AuthorizedUser";
import "./Navigation.css";
import Listing from "../listing/Listing";

const Nav = () => {
    const [userIsActive, setUserIsActive] = useState(false);

    useEffect(() => {
        const currentUser = sessionStorage.getItem('currentUser');

        if (currentUser) {
            setUserIsActive(true)
        } else {
            setUserIsActive(false)
        }
    }, []);

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
                        {userIsActive ? <AuthorizedUser setUserIsActive={setUserIsActive}/> : <SessionContainer />}

					</div>
				</nav>
				<div className="search_container">
                    <h1>Find it. Tour it. Own it.</h1>
					<input
                        className="search_container__search_bar"
						type="text"
						placeholder="Enter an address, neighborhood, city, or ZIP code"
					/>
                    <div className="search_container__search_button">

                    </div>
				</div>
			</div>
			<Listing />
		</>
	);
};

export default Nav;
