import React from "react";
import headerImage from "../Modal/assets/header.png";

const ModalWelcomeHeader = () => {
    const containerWelcomeHeader = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    };

    const welcomeHeader = {
        backgroundImage: `url(${headerImage})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "200px",
        width: "200px",
        height: "50px",
        margin: "1vh",
    };

    return (
        <>
            <div
                id="container__welcome_header"
                style={containerWelcomeHeader}
            >
                <div id="welcome_header" style={welcomeHeader}></div>
            </div>
        </>
    );
};

export default ModalWelcomeHeader;
