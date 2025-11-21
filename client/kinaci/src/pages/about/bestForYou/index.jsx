import React from "react";
import Lightbulb from "../../../icons/lightbulb";

function BestForYou() {
  return (
    <section
      className="
        max-w-6xl mx-auto 
        grid grid-cols-1 md:grid-cols-2 
        items-center gap-6 
        bg-[#fdf2ee] rounded-[10px] 
        p-[20px] md:p-[30px] 
        mb-[2rem]
      "
    >
      <div className="mt-[1.5rem] md:mt-[3rem] mb-[1.5rem] md:mb-[3rem] p-[1rem] md:p-[2rem]">
        <h1 className="mb-[2rem] md:mb-[3rem] text-[22px] md:text-[26px] font-semibold leading-snug">
          Gəlin sizə uyğun olanı tapaq...
        </h1>

        <ul className="flex flex-col gap-[20px] md:gap-[30px]">
          {[1, 2, 3].map((i) => (
            <li key={i} className="flex gap-[20px] md:gap-[37px] items-start">
              <Lightbulb className="w-[28px] h-[28px]" />
              <div>
                <p className="font-semibold mb-[6px] md:mb-[8px] text-[15px] md:text-[16px]">
                  Obyektlərin fərdi seçimi
                </p>
                <p className="text-[12px] md:text-[13px] text-gray-700">
                  Sizin üçün ən yaxşı əmlak
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-auto md:h-full">
        <div className="w-full aspect-video md:aspect-auto md:h-full">
          <iframe
            src="https://www.youtube.com/embed/X6h0rmZZpI4?si=7-8Fl20TRLQm4qvu"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="w-full h-full rounded-[10px]"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default BestForYou;
