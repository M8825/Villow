import { BackArrow, Heart, Share, Hide, More, Logo } from "./assets/svgs";

import "./style/ListingHeader.scss";

const ListingHeader = () => {
	return (
			<header className="listing_header">
        <div className="back-to-listing">
          <BackArrow /> <span>Back to search</span>
        </div>
				<Logo />
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
