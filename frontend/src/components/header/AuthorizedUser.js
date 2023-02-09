import React from "react";
import { useState } from "react";
import { logoutUser} from "../../store/usersReducer";
import { useDispatch } from "react-redux";
import "./AuthorizedUser.scss";

const AuthorizedUser = ({ setUserIsActive }) => {

	const dispatch = useDispatch();
	const [menuIsActive, setMenuIsActive] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();

		menuIsActive ? setMenuIsActive(false) : setMenuIsActive(true);
	};

	const handleSignOutClick = (e) => {
		e.preventDefault();

		dispatch(logoutUser(18));
		setUserIsActive(false);
	};
	return (
		<>
			<ul className="authorized-user" onClick={handleClick}>
				<li style={{}}>
					{menuIsActive ? (
						<section
							role="menu"
							className="authorized-user__dropdown"
						>
							<ul>
								<li>
									Saved
									homes
								</li>
								<li>
									Saved
									Searches
								</li>
								<li>
									Your
									Home
								</li>
								<li>
									Renter
									Hub
								</li>
								<li>
									Account
									Settings
								</li>
								<hr />
								<li onClick={handleSignOutClick}>
									Sign Out
								</li>
							</ul>
						</section>
					) : null}
				</li>
			</ul>
		</>
	);
};

export default AuthorizedUser;
