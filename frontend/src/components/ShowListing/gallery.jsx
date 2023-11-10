import React from "react";
import "./style/gallery.scss";

const Gallery = ({ listing }) => {
  const largeImage = listing.photoUrls[0]; // The large image for the left side
  const smallImages = listing.photoUrls.slice(1); // Rest of the images

  return (
    <div className="gallery">
      <img className="gallery-item large" alt="Large Home" src={largeImage} />
      {smallImages.map((photo, idx) => {
				const isLastTop = idx === 1;
				const isLastBottom = idx === 3;

				return (
					<img
						className={`gallery-item small ${isLastTop ? 'last-top' : ''} ${isLastBottom ? 'last-bottom' : ''}`}
						alt={`Home ${idx + 1}`}
						src={photo}
						key={idx}
					/>
				)
			})}
    </div>
  );
};

export default Gallery;
