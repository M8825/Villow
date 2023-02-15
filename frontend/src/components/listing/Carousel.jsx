import React from "react";
import ListingItem from "./ListingIndexItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { CarouselNextButton, CarouselPrevButton } from "./CarouselButton";
import "swiper/css";
// import "./Carousel.scss";

const Carousel = ({ sampleListings }) => {
	const listingStyling = {
		minWidth: "286px",
		height: "283px",
	};

	return (
		<>
			<Swiper
				className="carousel-container__swiper"
				modules={[Navigation, A11y]}
				spaceBetween={15}
				slidesPerView={4}
				navigation={{
					nextEl: ".custom-next-button",
					prevEl: ".custom-prev-button",
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
				<CarouselPrevButton />
				<CarouselNextButton />
			</div>
		</>
	);
};

export default Carousel;
