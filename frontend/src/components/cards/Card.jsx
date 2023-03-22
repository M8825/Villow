import React from "react";

const Card = ({listing, headerImg, header, body, buttonText }) => {
	debugger

	return listing && (
		<div className="cards-container__card">
			<img src={headerImg} alt="buy_a_house" />
			<div className="cards-container__card__body_wrapper">
				<h1>{listing.address}</h1>
				<p>{body}</p>
                <button>{buttonText}</button>
			</div>
		</div>
	);
};

export default Card;
