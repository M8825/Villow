import React from "react";

const ModalCloseButton = ({ closeModal }) => {
	return (
		<button
			aria-label="Close Modal"
			aria-labelledby="close-modal"
			className="_modal-close"
			// onClick={handleClick}
			onClick={closeModal}
		>
			<span id="close-modal" className="_hide-visual">
				Close
			</span>
			<svg className="_modal-close-icon" viewBox="0 0 40 40">
				<path d="M 10,10 L 30,30 M 30,10 L 10,30" />
			</svg>
		</button>
	);
};

export default ModalCloseButton;
