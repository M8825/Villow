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

  return (
    currentUser && (
      <div className="authorized-user-container">
        <div className="authorized-user" onClick={handleClick}></div>
        {menuIsActive && (
          <ul className="authorized-user__dropdown">
            <NavLink
              to={`/user/${currentUser.id}`}
              className="auth-menunav-link"
            >
              <li>User Profile</li>
            </NavLink>
            <li>Saved homes</li>
            <li>Your Home</li>
            <li>Renter Hub</li>
            <li>Account Settings</li>
            <hr />
            <li onClick={handleSignOutClick}>Sign Out</li>
          </ul>
        )}
      </div>
    )
  );
};

export default AuthorizedUser;
