import ServiceImg1 from "../../../assets/servicesImg.png";

function ServiceCard() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-[30px] mb-[3rem] ">
      <div className="service-card">
        <img src={ServiceImg1} alt="serviceImg" className="w-full h-auto rounded-xl" />
        <div className="serviceText mt-[17px] flex flex-col gap-[10px]">
          <h4 className="text-[#ff5300] text-[13px]">Pulsuz əmlak seçimi</h4>
          <p className="font-semibold text-[14px]">
            Pulsuz əmlak seçimi Türkiyənin daşınmaz əmlak bazarında çoxlu təkliflər
            var və bu siyahı hər həftə artır...
          </p>
        </div>
      </div>

      <div className="service-card">
        <img src={ServiceImg1} alt="serviceImg" className="w-full h-auto rounded-xl" />
        <div className="serviceText mt-[17px] flex flex-col gap-[10px]">
          <h4 className="text-[#ff5300] text-[13px]">Pulsuz əmlak seçimi</h4>
          <p className="font-semibold text-[14px]">
            Pulsuz əmlak seçimi Türkiyənin daşınmaz əmlak bazarında çoxlu təkliflər
            var və bu siyahı hər həftə artır...
          </p>
        </div>
      </div>

      <div className="service-card">
        <img src={ServiceImg1} alt="serviceImg" className="w-full h-auto rounded-xl" />
        <div className="serviceText mt-[17px] flex flex-col gap-[10px]">
          <h4 className="text-[#ff5300] text-[13px]">Pulsuz əmlak seçimi</h4>
          <p className="font-semibold text-[14px]">
            Pulsuz əmlak seçimi Türkiyənin daşınmaz əmlak bazarında çoxlu təkliflər
            var və bu siyahı hər həftə artır...
          </p>
        </div>
      </div>

      {/* Eyni strukturu digər 3 kart üçün də əlavə et */}
      <div className="service-card">
        <img src={ServiceImg1} alt="serviceImg" className="w-full h-auto rounded-xl" />
        <div className="serviceText mt-[17px] flex flex-col gap-[10px]">
          <h4 className="text-[#ff5300] text-[13px]">Pulsuz əmlak seçimi</h4>
          <p className="font-semibold text-[14px]">
            Pulsuz əmlak seçimi Türkiyənin daşınmaz əmlak bazarında çoxlu təkliflər
            var və bu siyahı hər həftə artır...
          </p>
        </div>
      </div>

      <div className="service-card">
        <img src={ServiceImg1} alt="serviceImg" className="w-full h-auto rounded-xl" />
        <div className="serviceText mt-[17px] flex flex-col gap-[10px]">
          <h4 className="text-[#ff5300] text-[13px]">Pulsuz əmlak seçimi</h4>
          <p className="font-semibold text-[14px]">
            Pulsuz əmlak seçimi Türkiyənin daşınmaz əmlak bazarında çoxlu təkliflər
            var və bu siyahı hər həftə artır...
          </p>
        </div>
      </div>

      <div className="service-card">
        <img src={ServiceImg1} alt="serviceImg" className="w-full h-auto rounded-xl" />
        <div className="serviceText mt-[17px] flex flex-col gap-[10px]">
          <h4 className="text-[#ff5300] text-[13px]">Pulsuz əmlak seçimi</h4>
          <p className="font-semibold text-[14px]">
            Pulsuz əmlak seçimi Türkiyənin daşınmaz əmlak bazarında çoxlu təkliflər
            var və bu siyahı hər həftə artır...
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
