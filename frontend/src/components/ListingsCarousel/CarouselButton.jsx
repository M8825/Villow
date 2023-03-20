// create react component with ES fat arrow syntax and export it as default
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import "./CarouselButton.scss";

export const CarouselPrevButton = ({ prevButtonClassName }) => {
	const classNames = `${prevButtonClassName} btn`;
	return (
		<button className={`${classNames}`}>
			<FontAwesomeIcon icon={faChevronLeft} className="btn__icon" />
		</button>
	);
};

export const CarouselNextButton = ({ nextButtonClassName }) => {
	const classNames = `${nextButtonClassName} btn`;
	return (
		<button className={`${classNames}`}>
			<FontAwesomeIcon icon={faChevronRight} className="btn__icon" />
		</button>
	);
};
