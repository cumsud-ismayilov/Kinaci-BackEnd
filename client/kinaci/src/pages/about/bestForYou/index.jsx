import React from "react";
import Lightbulb from "../../../icons/lightbulb";

function BestForYou() {
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 bg-[#fdf2ee] rounded-[10px] p-[20px] mb-[2rem]">
      <div className="mt-[3rem] mb-[3rem] p-[2rem]">
        <h1 className="mb-[3rem] text-[26px] font-semibold">
          Gəlin sizə uyğun olanı tapaq...
        </h1>
        <ul className="flex flex-col gap-[30px]">
          <li className="flex gap-[37px]">
            <Lightbulb />
            <div>
              <p className="font-semibold mb-[8px]">Obyektlərin fərdi seçimi</p>
              <p className="text-[13px]">Sizin üçün ən yaxşı əmlak</p>
            </div>
          </li>
          <li className="flex gap-[37px]">
            <Lightbulb />
            <div>
              <p className="font-semibold mb-[8px]">Obyektlərin fərdi seçimi</p>
              <p className="text-[13px]">Sizin üçün ən yaxşı əmlak</p>
            </div>
          </li>
          <li className="flex gap-[37px]">
            <Lightbulb />
            <div>
              <p className="font-semibold mb-[8px]">Obyektlərin fərdi seçimi</p>
              <p className="text-[13px]">Sizin üçün ən yaxşı əmlak</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="h-full">
        <iframe
          src="https://www.youtube.com/embed/X6h0rmZZpI4?si=7-8Fl20TRLQm4qvu"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </section>
  );
}

export default BestForYou;
