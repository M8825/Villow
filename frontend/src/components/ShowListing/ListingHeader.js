import {
	Heart,
	Share,
	Hide,
	More,
	Logo,
} from "./assets/svgs";

import "./style/ListingHeader.scss";

const ListingHeader = () => {

  return (
				<header className="listing_header">
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
  )
}

export default ListingHeader;
