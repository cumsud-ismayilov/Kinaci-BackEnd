import ServiceImg1 from "../../../assets/servicesImg.png";
import { Link } from "react-router-dom";

function ServiceCard() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-[30px] mb-[3rem] ">
      <div className="service-card">
        <Link to="/estateInvestments" >
          <img
            src={ServiceImg1}
            alt="serviceImg"
            className="w-full h-auto rounded-xl"
          />
        </Link>

        <div className="serviceText mt-[17px] flex flex-col gap-[10px]">
          <h4 className="text-[#ff5300] text-[13px]">Pulsuz əmlak seçimi</h4>
          <p className="font-semibold text-[14px]">
            Pulsuz əmlak seçimi Türkiyənin daşınmaz əmlak bazarında çoxlu
            təkliflər var və bu siyahı hər həftə artır...
          </p>
        </div>
      </div>

      <div className="service-card">
        <Link to="/estateInvestments" >
          <img
            src={ServiceImg1}
            alt="serviceImg"
            className="w-full h-auto rounded-xl"
          />
        </Link>
        <div className="serviceText mt-[17px] flex flex-col gap-[10px]">
          <h4 className="text-[#ff5300] text-[13px]">Pulsuz əmlak seçimi</h4>
          <p className="font-semibold text-[14px]">
            Pulsuz əmlak seçimi Türkiyənin daşınmaz əmlak bazarında çoxlu
            təkliflər var və bu siyahı hər həftə artır...
          </p>
        </div>
      </div>

      <div className="service-card">
        <Link to="/estateInvestments" >
          <img
            src={ServiceImg1}
            alt="serviceImg"
            className="w-full h-auto rounded-xl"
          />
        </Link>
        <div className="serviceText mt-[17px] flex flex-col gap-[10px]">
          <h4 className="text-[#ff5300] text-[13px]">Pulsuz əmlak seçimi</h4>
          <p className="font-semibold text-[14px]">
            Pulsuz əmlak seçimi Türkiyənin daşınmaz əmlak bazarında çoxlu
            təkliflər var və bu siyahı hər həftə artır...
          </p>
        </div>
      </div>

      <div className="service-card">
        <Link to="/estateInvestments" >
          <img
            src={ServiceImg1}
            alt="serviceImg"
            className="w-full h-auto rounded-xl"
          />
        </Link>
        <div className="serviceText mt-[17px] flex flex-col gap-[10px]">
          <h4 className="text-[#ff5300] text-[13px]">Pulsuz əmlak seçimi</h4>
          <p className="font-semibold text-[14px]">
            Pulsuz əmlak seçimi Türkiyənin daşınmaz əmlak bazarında çoxlu
            təkliflər var və bu siyahı hər həftə artır...
          </p>
        </div>
      </div>

      <div className="service-card">
        <Link to="/estateInvestments" >
          <img
            src={ServiceImg1}
            alt="serviceImg"
            className="w-full h-auto rounded-xl"
          />
        </Link>
        <div className="serviceText mt-[17px] flex flex-col gap-[10px]">
          <h4 className="text-[#ff5300] text-[13px]">Pulsuz əmlak seçimi</h4>
          <p className="font-semibold text-[14px]">
            Pulsuz əmlak seçimi Türkiyənin daşınmaz əmlak bazarında çoxlu
            təkliflər var və bu siyahı hər həftə artır...
          </p>
        </div>
      </div>

      <div className="service-card">
        <Link to="/estateInvestments" >
          <img
            src={ServiceImg1}
            alt="serviceImg"
            className="w-full h-auto rounded-xl"
          />
        </Link>
        <div className="serviceText mt-[17px] flex flex-col gap-[10px]">
          <h4 className="text-[#ff5300] text-[13px]">Pulsuz əmlak seçimi</h4>
          <p className="font-semibold text-[14px]">
            Pulsuz əmlak seçimi Türkiyənin daşınmaz əmlak bazarında çoxlu
            təkliflər var və bu siyahı hər həftə artır...
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
