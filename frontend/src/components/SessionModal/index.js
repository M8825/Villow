import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "../LoginForm";
import FocusTrap from "focus-trap-react";
import {
	ChakraProvider,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from "@chakra-ui/react";

export const Modal = ({ onClickOutside, closeModal, onSubmit }) => {
	return ReactDOM.createPortal(
		<FocusTrap>
			<aside
				tag="aside"
				role="dialog"
				tabIndex="-1"
				aria-modal="true"
				className="modal-cover"
				onClick={onClickOutside}
			>
				<div className="modal-area">
					<button
						aria-label="Close Modal"
						aria-labelledby="close-modal"
						className="_modal-close"
						onClick={closeModal}
					>
						<span
							id="close-modal"
							className="_hide-visual"
						>
							Close
						</span>
						<svg
							className="_modal-close-icon"
							viewBox="0 0 40 40"
						>
							<path d="M 10,10 L 30,30 M 30,10 L 10,30" />
						</svg>
					</button>
					<ChakraProvider>
						<Tabs>
							<TabList>
								<Tab>
									Sign in
								</Tab>
								<Tab>
									Create Account
								</Tab>
							</TabList>

							<TabPanels>
								<TabPanel>
									<LoginForm
										onSubmit={
											onSubmit
										}
										closeModalFunc={closeModal}
									/>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</ChakraProvider>
				</div>
			</aside>
		</FocusTrap>,
		document.body
	);
};

export default Modal;
