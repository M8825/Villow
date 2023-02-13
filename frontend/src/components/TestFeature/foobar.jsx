import React from "react";
import ModalContainer from "../modal/ModalContainer";

const Foobar = () => {
	const modalAreaStyling = {
		width: "800px",
		height: "800px",
		backgroundColor: "rgb(255 255 255)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "end",
		alignItems: "center",
		gap: "20px",
	}
	return (
		<ModalContainer modalAreaStyling={modalAreaStyling}>
			<h1>Mlkz</h1>
			<p>Wilson</p>
		</ModalContainer>
	);
};

export default Foobar;
