// create react component with ES fat arrow syntax and export it as default
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import './CarouselButton.scss'

export const CarouselNextButton = (props) => {
	return (
		<button className="custom-next-button btn">
            <FontAwesomeIcon icon={faChevronRight} className="btn__icon"/>
		</button>
	);
};

export const CarouselPrevButton = (props) => {
	return (
		<button className="custom-prev-button btn">
            <FontAwesomeIcon icon={faChevronLeft} className="btn__icon" />
		</button>
	);
};
