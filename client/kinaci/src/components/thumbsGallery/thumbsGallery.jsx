import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ThumbsGallery({singlePro}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full">
      {/* Böyük şəkil */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 thumbsGallery2"
      >
        <SwiperSlide>
          <img
            src={singlePro.images.image1}
            alt="image-1"
            className="w-full h-[450px] object-cover rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={singlePro.images.image2}
            alt="image-2"
            className="w-full h-[450px] object-cover rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={singlePro.images.image3}
            alt="image-3"
            className="w-full h-[450px] object-cover rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={singlePro.images.image4}
            alt="image-4"
            className="w-full h-[450px] object-cover rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={singlePro.images.image5}
            alt="image-5"
            className="w-full h-[450px] object-cover rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={singlePro.images.image6}
            alt="image-5"
            className="w-full h-[450px] object-cover rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={singlePro.images.image7}
            alt="image-5"
            className="w-full h-[450px] object-cover rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={singlePro.images.image8}
            alt="image-5"
            className="w-full h-[450px] object-cover rounded"
          />
        </SwiperSlide>
      </Swiper>

      {/* Thumbnail şəkillər */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper thumbsGallery mt-4"
      >
        <SwiperSlide>
          <img
            src={singlePro.images.image1}
            alt="thumb-1"
            className="w-full h-20 object-cover rounded cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={singlePro.images.image2}
            alt="thumb-2"
            className="w-full h-20 object-cover rounded cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={singlePro.images.image3}
            alt="thumb-3"
            className="w-full h-20 object-cover rounded cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={singlePro.images.image4}
            alt="thumb-4"
            className="w-full h-20 object-cover rounded cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={singlePro.images.image5}
            alt="thumb-5"
            className="w-full h-20 object-cover rounded cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={singlePro.images.image6}
            alt="thumb-5"
            className="w-full h-20 object-cover rounded cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={singlePro.images.image7}
            alt="thumb-5"
            className="w-full h-20 object-cover rounded cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={singlePro.images.image8}
            alt="thumb-5"
            className="w-full h-20 object-cover rounded cursor-pointer"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
