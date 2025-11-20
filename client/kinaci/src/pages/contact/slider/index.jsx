import React, { useRef, useState } from "react";
import Team1 from "../../../assets/team1-bb1e2ace.webp";
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
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <img src={Team1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Team1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Team1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Team1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Team1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Team1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Team1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Team1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Team1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Team1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Team1} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
