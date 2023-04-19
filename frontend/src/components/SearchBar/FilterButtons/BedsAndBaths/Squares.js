import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBedroom } from "../../../../store/searchFilters";

import "./Squares.scss";

const Squares = () => {
  const dispatch = useDispatch();
  const [selectedSquare, setSelectedSquare] = useState(null);

  function handleClick(e) {
    e.preventDefault();

    // Grab closes element with this .bedsandbaths-square class
    const squareElement = e.target.closest(".bedsandbaths-square");

    if (selectedSquare) {
      selectedSquare.classList.remove("selected-square");
    }

    setSelectedSquare(squareElement);
    squareElement.classList.add("selected-square");

    dispatch(setBedroom(squareElement.id));
  }

  return (
    <div className="squares-container" onClick={handleClick}>
      <div className="bedsandbaths-square start" id="any">
        <span>Any</span>
      </div>
      <div className="bedsandbaths-square" id="1">
        <span>1+</span>
      </div>
      <div className="bedsandbaths-square" id="2">
        <span>2+</span>
      </div>
      <div className="bedsandbaths-square" id="3">
        <span>3+</span>
      </div>
      <div className="bedsandbaths-square" id="4">
        <span>4+</span>
      </div>
      <div className="bedsandbaths-square end" id="5">
        <span>5+</span>
      </div>
    </div>
  );
};

export default Squares;
