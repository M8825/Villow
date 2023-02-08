import React from "react"

const SessionButton = ({ showModal, buttonRef, triggerText }) => {
    return (
        <button
            className="session-button"
            ref={buttonRef}
            onClick={showModal}
        >
            {triggerText}
        </button>
    );
};

export default SessionButton;

