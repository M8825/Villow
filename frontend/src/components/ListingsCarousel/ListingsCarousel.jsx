import { useSelector } from "react-redux";
import { getListings } from "../../store/listingsReducer";
import Carousel from "./Carousel";

import "./ListingsCarousel.scss";

const ListingsCarousel = ({
  header,
  paragraph,
  prevButtonClassName,
  nextButtonClassName,
}) => {
  const listings = useSelector(getListings);

  const sampleListings = listings ? listings.slice(0, 15) : [];

  return (
    <>
      <div className="splat_listing_container">
        <Carousel
          sampleListings={sampleListings}
          prevButtonClassName={prevButtonClassName}
          nextButtonClassName={nextButtonClassName}
          header={header}
          paragraph={paragraph}
        />
      </div>
    </>
  );
};

export default ListingsCarousel;
