import React, { useState } from "react";
import "./Squares.scss";

const Squares = () => {
  const [selectedSquare, setSelectedSquare] = useState(null);

  function handleClick(e) {
    e.preventDefault();

    if (selectedSquare) {
      selectedSquare.classList.remove("selected-square");
    }

    const squareElement = e.target.closest(".bedsandbaths-square");
    if (squareElement) {
      setSelectedSquare(squareElement);
      squareElement.classList.add("selected-square");
    }
  }

  return (
    <div className="squares-container" onClick={handleClick}>
      <div className="bedsandbaths-square start" id="any">
        <span>Any</span>
      </div>
      <div className="bedsandbaths-square" id="one">
        <span>1+</span>
      </div>
      <div className="bedsandbaths-square" id="two">
        <span>2+</span>
      </div>
      <div className="bedsandbaths-square" id="three">
        <span>3+</span>
      </div>
      <div className="bedsandbaths-square" id="four">
        <span>4+</span>
      </div>
      <div className="bedsandbaths-square end" id="five">
        <span>5+</span>
      </div>
    </div>
  );
};

export default Squares;
