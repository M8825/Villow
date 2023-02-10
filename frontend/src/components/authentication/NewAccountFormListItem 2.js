import React from "react";
import NewAccountPasswordErrors from "./NewAccountPasswordErrors";

const ListItem = ({ password, text, valid }) => {
	const color = password !== "" ? "rgb(163, 0, 11)" : "gray"

	return (
		<li
			style={{
				display: "flex",
				alignItems: "center",
				gap: "5px",
			}}
		> {password === "" ?
		(
			<p style={{ color: color, marginLeft: "17px"}}>{text}</p>
		) : (
			<NewAccountPasswordErrors valid={valid} color={color} text={text} />
		)}
		</li>
	);
};

export default ListItem;
