import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { getActiveUser } from "../../store/usersReducer";
import { getLocalStorageAll } from "../utils/fetchLocalStorage"

import { getListings, fetchSearchListings } from "../../store/listingsReducer";

import ListingItem from "../ListingItem/ListingItem";
import "./ListingsIndex.scss";

const ListingsPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const listings = useSelector(getListings);


  useEffect(() => {
    // Prevent fetching if user is coming from spash page search bar
    // In that case splash page listingItem component will feth the data
    if (listings.length === 0) {
      // fetch based on state, becase "city" actually requires "City, State"
      // format. <search> action will not query the databse with empty
      // string when term flag is "city"
      const localStorageObj = getLocalStorageAll();

      let term;
      let termValue;

      if (localStorageObj.search_word) {
        term = Object.keys(localStorageObj.search_word)[0];
        termValue = Object.values(localStorageObj.search_word)[0];
        delete localStorageObj.search_word;
      };


      dispatch(fetchSearchListings(term, termValue, localStorageObj));
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [reversed, setReversed] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    history.push("/listings/listingId");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    history.push("/listings");
  };

  const currentUser = useSelector(getActiveUser());

  const listingStyling = {
    flexBasis: "49%",
    maxWidth: "49%",
    height: "281px",
  };

  const thumbnailStyling = {
    height: "171px",
  };

  const handleClick = (e) => {
    e.preventDefault();
    setReversed(!reversed);
  };

  return (
    <>
      <div className="index-container">
        <div className="listing-container-header">
          <h1>Manhattan NY Real Estate & Homes For Sale</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="listing-container-header__btn_container">
              <button className="btn1">
                <span>{listings.length}</span> Agent listings
              </button>
              <button className="btn2">
                {" "}
                <span>0</span> Agent listings
              </button>
            </div>
            <FontAwesomeIcon icon={faArrowUp} onClick={handleClick} />
          </div>
        </div>
        <div className="listings-container">
          {reversed
            ? listings
                .reverse()
                .map((listing, i) => (
                  <ListingItem
                    key={i}
                    listing={listing}
                    style
                    listingStyling={listingStyling}
                    thumbnailStyling={thumbnailStyling}
                    userId={currentUser.id}
                  />
                ))
            : listings.map((listing, i) => (
                <ListingItem
                  key={i}
                  listing={listing}
                  style
                  listingStyling={listingStyling}
                  thumbnailStyling={thumbnailStyling}
                  userId={currentUser.id}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default ListingsPage;
