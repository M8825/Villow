import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ModalContainer from "../Modal/ModalContainer";
import AuthorizedUser from "./AuthorizedUser";
import ModalTabs from "../Modal/ModalTabs";
import ModalWelcomeHeader from "./Welcome";
import SearchBar from "../SearchBar/SearchBar";

import { fetchCurrentUser, getActiveUser } from "../../store/usersReducer";

import villow from "../assets/Logo-Villow.svg";
import "./Navigation.scss";

const Navigation = ({ isIndex }) => {
  const dispatch = useDispatch();
  const activeUser = useSelector(getActiveUser());

  useEffect(() => {
    if (!activeUser) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, activeUser]);

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
            <a href="https://wellfound.com/u/malkhaz-mamulashvili">Wellfound</a>
            <a href="#">About</a>
          </div>
          <Link to="/">
            <div
              className="grid-item middle"
              style={{ width: "200px", height: "10px" }}
            >
              <img src={villow} alt="villow" style={{ marginTop: "20px", height: "55px" }} />
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
            <h1>Agents. Tours. Loans. Homes</h1>
            <SearchBar />
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
