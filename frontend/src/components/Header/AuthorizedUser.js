import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getActiveUser, logoutUser } from "../../store/usersReducer";

import "./AuthorizedUser.scss";

const AuthorizedUser = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getActiveUser());

  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {

    function handleOutsideClick(e) {
      if(!e.target.closest(".authorized-user-container")) {
        setDropDown(false)
      }
    }

    if(dropDown) {
      document.addEventListener("click", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }

  }, [dropDown])

  const handleClick = (e) => {
    e.preventDefault();

    setDropDown(!dropDown);
  };

  const handleSignOutClick = (e) => {
    e.preventDefault();

    dispatch(logoutUser());
  };

  return (
    currentUser && (
      <div className="authorized-user-container">
        <div className="authorized-user" onClick={handleClick}></div>
        {dropDown && (
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
