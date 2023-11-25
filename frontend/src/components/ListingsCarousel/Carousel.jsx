import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { CarouselNextButton, CarouselPrevButton } from "./CarouselButton";

import ListingItem from "../ListingItem/ListingItem";

import "./Carousel.scss";

import "swiper/css";
import ListingItemSkeleton from "./LisitngItemSkeleton";

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
          spaceBetween={25}
          slidesPerView={3.4}
          navigation={{
            prevEl: `.${prevButtonClassName}`,
            nextEl: `.${nextButtonClassName}`,
          }}
        >
          {sampleListings.length
            ? sampleListings.map((listing) => {
                return (
                  <SwiperSlide key={listing.id}>
                    <ListingItem
                      listing={listing}
                      listingStyling={listingStyling}
                    />
                  </SwiperSlide>
                );
              })
            : [1, 2, 3, 4, 5].map((_, idx) => (
                <SwiperSlide key={idx.id}>
                  <ListingItemSkeleton key={idx} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
