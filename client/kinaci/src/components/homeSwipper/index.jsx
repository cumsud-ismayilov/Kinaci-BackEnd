import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
function HomeSwipper() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper ownClass"
    >
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1489370321024-e0410ad08da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className="absolute bg-[#05284199] inset-0 z-50"></div>
        <div className="text-white text-center absolute top-35 left-110 z-999 max-w-[400px] sm:max-w-[600px] md:px-0 px-16">
          <h1 className="font-semibold lg:text-[56px] md:text-[40px] sm:text-[30px] text-5xl leading-[1.5]">
            Lorem ipsum dolor sit.
          </h1>
          <p className="text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            dolorum labore qui reiciendis rem suscipit?
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className="absolute bg-[#05284199] inset-0 z-50"></div>
        <div className="text-white text-center absolute top-35 left-110 z-999 max-w-[400px] sm:max-w-[600px] md:px-0 px-16">
          <h1 className="font-semibold lg:text-[56px] md:text-[40px] sm:text-[30px] text-5xl leading-[1.5]">
            Lorem ipsum dolor sit.
          </h1>
          <p className="text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            dolorum labore qui reiciendis rem suscipit?
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className="absolute bg-[#05284199] inset-0 z-50"></div>
        <div className="text-white text-center absolute top-35 left-110 z-999 max-w-[400px] sm:max-w-[600px] md:px-0 px-16">
          <h1 className="font-semibold lg:text-[56px] md:text-[40px] sm:text-[30px] text-5xl leading-[1.5]">
            Lorem ipsum dolor sit.
          </h1>
          <p className="text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            dolorum labore qui reiciendis rem suscipit?
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeSwipper;
