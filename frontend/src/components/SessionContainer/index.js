import React from "react";
import Modal from "../SessionModal";
import SessionButton from "../SessionButton";
import { useState } from "react";

const SessionContainer = () => {
	let [popup, setState] = useState({ isShown: false });
	const [closeButton, setCloseButton] = useState(null);

	const showModal = () => {
		setState({ isShown: true });
		toggleScrollLock();
	};
	const closeModal = () => {
		setState({ isShown: false });
		toggleScrollLock();
	};
	const onKeyDown = (event) => {
		if (event.keyCode === 27) {
			closeModal();
		}
	};
	const onClickOutside = (event) => {
		// if (Modal && Modal.contains(event.target)) return;
		closeModal();
	};

	const onSubmit = (event) => {
		event.preventDefault(event);
		console.log(event.target.name.value);
		console.log(event.target.email.value);
	};

	const toggleScrollLock = () => {
		document.querySelector("html").classList.toggle("scroll-lock");
	};
	return (
		<>
			<SessionButton
				showModal={showModal}
				// buttonRef={(n) => (SessionButton = n)}
				triggerText={"login in"}
			/>
			{popup.isShown ? (
				<Modal
					onSubmit={onSubmit}
					// modalRef={(n) => (Modal = n)}
					buttonRef={(n) => setCloseButton(n)}
					closeModal={closeModal}
					onKeyDown={onKeyDown}
					onClickOutside={onClickOutside}
				/>
			) : null}
		</>
	);
};

export default SessionContainer;
