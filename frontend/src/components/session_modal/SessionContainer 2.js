import React from "react";
import Modal from "./SessionModal";
import SessionButton from "./SessionButton";
import { useState } from "react";

const SessionContainer = () => {
	let [popup, setPopup] = useState({ isShown: false });

	const showModal = () => {
		setPopup({ isShown: true });
		toggleScrollLock();
	};

	const closeModal = () => {
		setPopup({ isShown: false });
		toggleScrollLock();
	};

	const onClickOutside = (event) => {
        if (event.target.className === "modal-cover") {
            closeModal();
        }
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
				triggerText={"Sign in"}
			/>
			{popup.isShown ? (
				<Modal
					onSubmit={onSubmit}
					closeModal={closeModal}
					onClickOutside={onClickOutside}
				/>
			) : null}
		</>
	);
};

export default SessionContainer;
