import BgImg3 from "../../../assets/bgImg3.png";
import KinaciLogo from "../../../assets/kinaciLogo.png";

function InfoSec() {
  return (
    <div
      className="
        max-w-6xl mx-auto bg-no-repeat bg-cover bg-center 
        h-[380px] sm:h-125 
        rounded-[16px] mb-[4rem] 
        relative
      "
      style={{ backgroundImage: `url(${BgImg3})` }}
    >
      {/* Logo Box */}
      <div
        className="
          bg-[#FDF0EA] w-[160px] h-[120px] sm:w-[210px] sm:h-[160px] 
          rounded-[16px] flex items-center justify-center 
          absolute top-[7%] 
          left-2 sm:left-[-9%]
        "
      >
        <img
          className="w-[120px] h-[45px] sm:w-[167px] sm:h-[65px]"
          src={KinaciLogo}
          alt="kinaciLogo"
        />
      </div>

      {/* Info Text Box */}
      <div
        className="
          info-text 
          w-[95%] sm:w-[1129px]
          grid grid-cols-2 sm:flex 
          justify-around items-center 
          gap-4 sm:gap-0
          rounded-[16px] 
          bg-[#0528417d] 
          h-[150px] sm:h-[179px] 
          absolute bottom-[3%] left-1/2 -translate-x-1/2 
          z-10 p-4
        "
      >
        {[1,2,3,4,5].map((i) => (
          <div key={i} className="text-white text-center">
            <h1 className="text-[28px] sm:text-[50px] font-semibold">4 Bin</h1>
            <p className="text-[12px] sm:text-[15px]">Mutlu Müşteri</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoSec;
