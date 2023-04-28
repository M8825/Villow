import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { CarouselNextButton, CarouselPrevButton } from "./CarouselButton";

import ListingItem from "../ListingItem/ListingItem";

import "./Carousel.scss";

import "swiper/css";

const Carousel = ({
  sampleListings,
  prevButtonClassName,
  nextButtonClassName,
  header,
  paragraph,
}) => {
  const listingStyling = {
    minWidth: "286px",
    height: "283px",
  };

  return (
    <div className="carousel-container">
      <div className="header-container">
        <div className="splat_listing_container__headers">
          <h1>{header}</h1>
          <p>{paragraph}</p>
        </div>
        <div className="custom-nav-buttons">
          <CarouselPrevButton prevButtonClassName={prevButtonClassName} />
          <CarouselNextButton nextButtonClassName={nextButtonClassName} />
        </div>
      </div>

      <div>
        <Swiper
          className="carousel-container__swiper"
          modules={[Navigation, A11y]}
          spaceBetween={15}
          slidesPerView={3.3}
          navigation={{
            prevEl: `.${prevButtonClassName}`,
            nextEl: `.${nextButtonClassName}`,
          }}
        >
          {sampleListings.map((listing) => {
            return (
              <SwiperSlide key={listing.id}>
                <ListingItem
                  listing={listing}
                  listingStyling={listingStyling}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
