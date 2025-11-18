import { Link } from "react-router";
import Phone from "../../icons/phone";
import RightArrow from "../../icons/rightArrow";

function PrintSec() {
  return (
    <section className="bg-[#fdf2ee] py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">

        {/* --- Text Left --- */}
        <div className="text-left">
          <h2 className="text-[22px] md:text-3xl font-bold text-[#062f3d] leading-snug mb-2">
            Kömək lazımdır? Mütəxəssisimizlə danışın.
          </h2>
          <p className="text-gray-700 text-[14px] md:text-base">
            Mütəxəssislərimizlə danışın və ya daha çox mülkə baxın.
          </p>
        </div>

        {/* --- Buttons --- */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start md:justify-end">

          {/* Contact Button */}
          <Link
            to="/"
            className="border bg-white border-orange-500 text-orange-500 
                       px-5 py-[14px] md:py-[20px] rounded-lg 
                       flex items-center gap-2 text-sm md:text-base 
                       hover:bg-orange-500 hover:text-white transition"
          >
            Bizimlə əlaqə saxlayın
            <RightArrow />
          </Link>

          {/* Call Button */}
          <Link
            to="tel:+994514586806"
            className="bg-orange-500 text-white 
                       px-5 py-[14px] md:py-[20px] rounded-lg 
                       flex items-center gap-2 text-sm md:text-base 
                       hover:bg-orange-600 transition"
          >
            <Phone />
            +994514586806
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PrintSec;
