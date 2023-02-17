import React from "react";


const Gallery = ({ listing }) => {
	return (
		<div
			className="gallery-wrapper"
		>
			<img
				className="header"
				alt="home_image"
				src={listing.photoUrls[0]}
			/>

			<div className="rest_gallery">
				{listing.photoUrls.map((photo, idx) => {

					if (idx !== 0) {
                        const classForImg = idx % 2 === 0 ? "right" :  "left"

						return (
							<img
								src={photo}
								alt="home_image"
								key={idx}
								className={classForImg}
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

export default Gallery;
