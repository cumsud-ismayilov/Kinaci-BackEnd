import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper myCustomSwiper"
      >
        <SwiperSlide>
          <img
            src="https://kinaciproperty.com/assets/team1-bb1e2ace.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kinaciproperty.com/assets/team1-bb1e2ace.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kinaciproperty.com/assets/team1-bb1e2ace.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kinaciproperty.com/assets/team1-bb1e2ace.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kinaciproperty.com/assets/team1-bb1e2ace.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kinaciproperty.com/assets/team1-bb1e2ace.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kinaciproperty.com/assets/team1-bb1e2ace.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kinaciproperty.com/assets/team1-bb1e2ace.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kinaciproperty.com/assets/team1-bb1e2ace.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kinaciproperty.com/assets/team1-bb1e2ace.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kinaciproperty.com/assets/team1-bb1e2ace.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
