import React from "react";

import "./style/gallery.scss";

const Gallery = ({ listing }) => {
  const largeImage = listing.photoUrls[0]; // The large image for the left side
  const smallImages = listing.photoUrls.slice(1); // Rest of the images

  return (
    <div className="gallery">
      <div className="gallery-item large">
        <img alt="Large Home" src={largeImage} />
      </div>
      {smallImages.map((photo, idx) => {
        return (
          <div className={`gallery-item small`} key={idx}>
            <img alt={`Home ${idx + 1}`} src={photo} />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
