import React from "react";
import ModalContainer from "../modal/ModalContainer";
import ModalTabs from "../modal/ModalTabs";

const Foobar = () => {
	return (
		<>
			<h1>FROM FOOBAR</h1>
			<ModalContainer content={ModalTabs}/>
		</>
	);
};

export default Foobar;
