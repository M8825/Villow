import React from "react";

const SessionButton = ({ showModal, triggerText }) => {
	return (
		<button className="session-button" onClick={showModal}>
			{triggerText}
		</button>
	);
};

export default SessionButton;
