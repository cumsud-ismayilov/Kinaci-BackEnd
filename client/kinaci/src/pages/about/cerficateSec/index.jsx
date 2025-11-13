// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/navigation';


// import required modules
import { FreeMode,Navigation } from "swiper/modules";

function Certificate() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1  items-center gap-6 mb-[2rem]">
      <div>
        <h2>Sertifikatlarımız</h2>
        <p>
          Hər il minlərlə xarici vətəndaş Azərbaycanın daşınmaz əmlakını alır.
          Bu baxımdan etibarlı bir şirkət seçmək prinsipial əhəmiyyət kəsb edir.
          Kınacı Qrupu keyfiyyət və peşəkarlığa diqqət yetirir.
          <br />
          <br />
          Qüsursuz iş təkcə dünyada bir çox müştərilərin müsbət rəyləri ilə
          deyil, həm də sertifikatların mövcudluğu ilə təsdiqlənir.
          <br />
          <br />
          Bunlar etibarlı tərəfdaşlığın, dürüstlüyün və bizim tərəfimizdən
          bağlanmış bütün müqavilələrə uyğunluğun təminatıdır.
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          freeMode={true}
         navigation={true}
          modules={[FreeMode,Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://kinaci.s3.eu-central-1.amazonaws.com/9/6c47719b9933e2717b08eea0c51deba1.jpeg" alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://kinaci.s3.eu-central-1.amazonaws.com/9/6c47719b9933e2717b08eea0c51deba1.jpeg" alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://kinaci.s3.eu-central-1.amazonaws.com/9/6c47719b9933e2717b08eea0c51deba1.jpeg" alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://kinaci.s3.eu-central-1.amazonaws.com/9/6c47719b9933e2717b08eea0c51deba1.jpeg" alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://kinaci.s3.eu-central-1.amazonaws.com/9/6c47719b9933e2717b08eea0c51deba1.jpeg" alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://kinaci.s3.eu-central-1.amazonaws.com/9/6c47719b9933e2717b08eea0c51deba1.jpeg" alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://kinaci.s3.eu-central-1.amazonaws.com/9/6c47719b9933e2717b08eea0c51deba1.jpeg" alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Certificate;
