import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function CardSwipperv2({item}) {
     const imagesObj = item.images ? item.images : item;

  const [image1, image2, image3, image4, image5] = [
    imagesObj.image1,
    imagesObj.image2,
    imagesObj.image3,
    imagesObj.image4,
    imagesObj.image5,
  ];
  return (
     <div className="w-full h-full rounded-[7px] overflow-hidden shadow-lg object-cover">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="h-full w-full rounded-[7px] object-cover"
      >
        {image1 && (
          <SwiperSlide>
            {" "}
            <img
              src={image1}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />{" "}
          </SwiperSlide>
        )}{" "}
        {image2 && (
          <SwiperSlide>
            {" "}
            <img
              src={image2}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />{" "}
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default CardSwipperv2
