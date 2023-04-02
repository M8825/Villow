import React from "react";
import "./index.scss";
import { buyHome, sellHome, rentHome } from "./cardText";
import Card from "./Card";
import { Link } from "react-router-dom";

const Layout = () => {
	return (
		<div className="cards-container">
			<Link to="/listings">
				<Card
					headerImg={buyHome.headerImg}
					header={buyHome.header}
					body={buyHome.body}
					buttonText={buyHome.btnText}
				/>
			</Link>

			<Link to="/listings/new">
				<Card
					headerImg={sellHome.headerImg}
					header={sellHome.header}
					body={sellHome.body}
					buttonText={sellHome.btnText}
				/>
			</Link>
			<Card
				headerImg={rentHome.headerImg}
				header={rentHome.header}
				body={rentHome.body}
				buttonText={rentHome.btnText}
			/>
		</div>
	);
};

export default Layout;
