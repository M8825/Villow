import React from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import ModalCloseButton from "./ModalCloseButton";
import ModalTabs from "./ModalTabs";
import "./Modal.scss";

export const Modal = ({ onClickOutside, closeModal }) => {
	return ReactDOM.createPortal(
		<FocusTrap>
			<aside
				className="modal-container"
				tag="aside"
				role="dialog"
				tabIndex="-1"
				aria-modal="true"
				onClick={onClickOutside}
			>
				<div className="modal-area">
					<ModalCloseButton closeModal={closeModal} />
					<div id="container__welcome_header">
						<div id="welcome_header"></div>
					</div>
					<ModalTabs closeModal={closeModal}/>
				</div>
			</aside>
		</FocusTrap>,
		document.body
	);
};

export default Modal;
