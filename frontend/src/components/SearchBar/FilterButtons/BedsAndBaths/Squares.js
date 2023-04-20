import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./Squares.scss";

const Squares = ({ squareType, squareNumber, setNumber }) => {
  const dispatch = useDispatch();

  const [selectedSquare, setSelectedSquare] = useState(null);

  useEffect(() => {
    if (selectedSquare) {
      selectedSquare.classList.remove("selected-square");
    }

    const squareElement = document.getElementById(
      `${squareType}-${squareNumber}`
    );

    if (squareElement) {
      setSelectedSquare(squareElement);
      squareElement.classList.add("selected-square");
    }
  }, []);

  function handleClick(e) {
    e.preventDefault();

    // Grab closes element with this .bedsandbaths-square class
    const squareElement = e.target.closest(".bedsandbaths-square");

    if (selectedSquare) {
      selectedSquare.classList.remove("selected-square");
    }

    setSelectedSquare(squareElement);
    squareElement.classList.add("selected-square");

    dispatch(setNumber(squareElement.id[`${squareType.length + 1}`]));
  }

  return (
    <div className="squares-container" onClick={handleClick}>
      <div className={`bedsandbaths-square start`} id={`${squareType}-0`}>
        <span>Any</span>
      </div>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`bedsandbaths-square${i === 4 ? " end" : ""}`}
          id={`${squareType}-${i + 1}`}
        >
          <span>{i + 1}+</span>
        </div>
      ))}
    </div>
  );
};

export default Squares;
