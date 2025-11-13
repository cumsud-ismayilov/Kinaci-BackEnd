import { Link } from "react-router"
import Phone from "../../icons/phone"
import RightArrow from "../../icons/rightArrow"

function PrintSec() {
  return (
    <section className="bg-[#fdf2ee] py-14 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#062f3d] mb-2">
            Kömək lazımdır? Mütəxəssisimizlə danışın.
          </h2>
          <p className="text-gray-700">
            Mütəxəssislərimizlə danışın və ya daha çox mülkə baxın.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end">
          <Link
            to="/"
            className="border bg-white border-orange-500 text-orange-500 px-6 py-[20px] rounded-lg flex items-center gap-2 hover:bg-orange-500 hover:text-white transition"
          >
            Bizimlə əlaqə saxlayın
            <RightArrow/>
          </Link>
          <Link to="tel:+994514586806"
            
            className="bg-orange-500 text-white px-6 py-[20px] rounded-lg flex items-center gap-2 hover:bg-orange-600 transition"
          >
           <Phone/>
            +994514586806
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PrintSec
