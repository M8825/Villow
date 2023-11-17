import { useContext } from "react";

import { CloseModalFunction } from "../Modal/ModalContainer";
import villow from "../assets/Logo-Villow.svg";
import { BackArrow, Heart, Share, Hide, More} from "./assets/svgs";

import "./style/ListingHeader.scss";

const ListingHeader = () => {
	const closeModal = useContext(CloseModalFunction);

	return (
		<header className="listing_header">
			<div className="back-to-listing" onClick={() => closeModal()}>
				<BackArrow /> <span>Back to search</span>
			</div>
			<div
				className="grid-item middle"
				style={{ width: "125px", height: "45px" }}
			>
				<img src={villow} alt="villow" style={{ marginTop: "5px" }} />
			</div>
			<ul>
				<li>
					<Heart /> Save
				</li>
				<li>
					<Share /> Share
				</li>
				<li>
					<Hide /> Hide
				</li>
				<li>
					<More /> More
				</li>
			</ul>
		</header>
	);
};

export default ListingHeader;
