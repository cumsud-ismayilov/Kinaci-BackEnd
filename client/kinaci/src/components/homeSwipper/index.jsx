import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function HomeSwipper() {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1489370321024-e0410ad08da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Lorem ipsum dolor sit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum labore qui reiciendis rem suscipit?",
    },
    {
      img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Lorem ipsum dolor sit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum labore qui reiciendis rem suscipit?",
    },
    {
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Lorem ipsum dolor sit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum labore qui reiciendis rem suscipit?",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper ownClass relative"
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx} className="relative">
          <img src={slide.img} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#05284199] z-30"></div>
          
          {/* Text */}
          <div className="absolute inset-0 z-40 flex flex-col justify-center items-center text-center px-4 md:px-8">
            <h1 className="text-white font-semibold lg:text-[56px] md:text-[40px] sm:text-[30px] text-2xl leading-[1.5]">
              {slide.title}
            </h1>
            <p className="text-white text-[15px] sm:text-[14px] mt-2 max-w-md">
              {slide.desc}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeSwipper;
