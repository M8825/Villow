import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getActiveUser, logoutUser } from "../../store/usersReducer";

import "./AuthorizedUser.scss";
const AuthorizedUser = () => {
	const dispatch = useDispatch();
	const [menuIsActive, setMenuIsActive] = useState(false);

	const currentUser = useSelector(getActiveUser());

	const handleClick = (e) => {
		e.preventDefault();

		menuIsActive ? setMenuIsActive(false) : setMenuIsActive(true);
	};

	const handleSignOutClick = (e) => {
		e.preventDefault();

		dispatch(logoutUser());
	};

	return currentUser && (
		<>
			<ul className="authorized-user" onClick={handleClick}>
				<li style={{}}>
					{menuIsActive ? (
						<section
							role="menu"
							className="authorized-user__dropdown"
						>
							<ul>
								<NavLink to={`/user/${currentUser.id}`}>
									<li>User Profile</li>
								</NavLink>
								<li>Saved homes</li>
								<li>Your Home</li>
								<li>Renter Hub</li>
								<li>Account Settings</li>
								<hr />
								<li onClick={handleSignOutClick}>Sign Out</li>
							</ul>
						</section>
					) : null}
				</li>
			</ul>
		</>
	);
};

export default AuthorizedUser;
