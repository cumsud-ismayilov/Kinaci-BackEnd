import React from "react";

function GoogleMapSec() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 p-[24px_0px]">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.3445901497475!2d32.08704757563057!3d36.49754317233495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc9b223f372ef3%3A0x3657d2b8273a7f29!2sKINACI%20GROUP%20(Construction%20%26%20Tourism%20%26%20Real%20Estate)!5e0!3m2!1saz!2saz!4v1754997585379!5m2!1saz!2saz"
          //   width={100%}
          height={300}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-[12px] w-full"
        />
      </div>
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[28px] font-semibold text-[#052841]">
          Sizdən eşitməyi çox istərdik.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Quisque ac felis sit neque
          libero. Enim etiam congue a posuere consequat augue nulla. Tortor
          eleifend diam nunc bibendum in. Duis id nunc gravida urna.
        </p>
        <button className="py-3 px-8 rounded-[12px] w-full font-semibold gap-3 bg-orange-500 text-white cursor-pointer">
          Bizimlə əlaqə saxlayın
        </button>
      </div>
    </div>
  );
}

export default GoogleMapSec;
