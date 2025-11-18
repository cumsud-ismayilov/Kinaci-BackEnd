import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

// 🔹 Şəkilləri birbaşa import edirik:
import Antalya from "../../../../assets/div-item.png";
import Istanbul from "../../../../assets/div-item-1.png";
import Izmir from "../../../../assets/div-item-2.png";
import Ankara from "../../../../assets/ankara.png.png";
import Edirne from "../../../../assets/edirne.png.png";
import Tekirdag from "../../../../assets/tekirdağ.png.png";
import Eskisehir from "../../../../assets/eskişehir.png.png";

const cities = [
  { name: "Antalya", img: Antalya },
  { name: "İstanbul", img: Istanbul },
  { name: "İzmir", img: Izmir },
  { name: "Ankara", img: Ankara },
  { name: "Edirne", img: Edirne },
  { name: "Tekirdağ", img: Tekirdag },
  { name: "Eskişehir", img: Eskisehir },
];

function AllCitySlider() {
  const navigate = useNavigate();

  const handleClick = (cityName) => {
    navigate(`/possessions?city=${cityName}`);
  };

  return (
    <div className="px-[11px] lg:px-0">
      <Swiper
        slidesPerView={3} // mobil üçün 3 slide
        spaceBetween={10}
        breakpoints={{
          1024: { slidesPerView: 4, spaceBetween: 15 }, // desktop ≥1024px
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper myCustomSwiper"
      >
        {cities.map((city, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={city.img}
              alt={city.name}
              className="cursor-pointer rounded-[10px] shadow-md hover:scale-105 transition-transform w-full h-[100px] sm:h-[120px] md:h-[140px] lg:h-[180px] object-cover"
              onClick={() => handleClick(city.name)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AllCitySlider;
