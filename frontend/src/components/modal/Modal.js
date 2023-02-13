import React from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import ModalCloseButton from "./ModalCloseButton";
import ModalTabs from "./ModalTabs";
import "./Modal.scss";

export const Modal = (props) => {
	return ReactDOM.createPortal(
		<FocusTrap>
			<aside
				className="modal-container"
				tag="aside"
				role="dialog"
				tabIndex="-1"
				aria-modal="true"
				onClick={props.onClickOutside}
			>
				<div className="modal-area" style={props.modalArea}>
					<ModalCloseButton closeModal={props.closeModal} />
					<div id="container__welcome_header" style={props.containerWelcomeHeader}>
						<div id="welcome_header" style={props.welcomeHeader}></div>
					</div>
					<ModalTabs closeModal={props.closeModal}/>
				</div>
			</aside>
		</FocusTrap>,
		document.body
	);
};

export default Modal;
