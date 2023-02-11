import React from "react";
import ListingItem from "./ListingIndexItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({ sampleListings }) => {
	return (
		<Swiper
			style={{ width: "1200px", height: "100%", padding: "10px" }}
			modules={[Navigation, A11y]}
			spaceBetween={15}
			slidesPerView={4}
			navigation
		>
			{sampleListings.map((listing, i) => {
				return (
					<SwiperSlide key={listing.id}>
						<ListingItem key={i} listing={listing} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default Carousel;
