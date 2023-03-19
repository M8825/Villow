import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { CarouselNextButton, CarouselPrevButton } from "./CarouselButton";

import ListingItem from "../ListingItem/ListingItem"

import './Carousel.scss'
import "swiper/css";

const Carousel = ({ sampleListings, prevButtonClassName, nextButtonClassName}) => {
	const listingStyling = {
		minWidth: "286px",
		height: "283px",
	};

	debugger
	return (
		<>
			<Swiper
				className="carousel-container__swiper"
				modules={[Navigation, A11y]}
				spaceBetween={15}
				slidesPerView={4}
				navigation={{
					prevEl: `.${prevButtonClassName}`,
					nextEl: `.${nextButtonClassName}`,
				}}
			>
				{sampleListings.map((listing, i) => {
					return (
						<SwiperSlide key={listing.id}>
							<ListingItem key={i} listing={listing} listingStyling={listingStyling}/>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className="custom-nav-buttons">
				<CarouselPrevButton prevButtonClassName={prevButtonClassName} />
				<CarouselNextButton nextButtonClassName={nextButtonClassName} />
			</div>
		</>
	);
};

export default Carousel;
