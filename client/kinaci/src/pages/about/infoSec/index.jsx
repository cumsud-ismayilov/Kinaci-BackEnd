import BgImg3 from "../../../assets/bgImg3.png";
import KinaciLogo from "../../../assets/kinaciLogo.png";
function InfoSec() {
  return (
    <div
      className="max-w-6xl mx-auto bg-no-repeat bg-cover bg-center h-125 rounded-[16px] mb-[4rem] relative"
      style={{ backgroundImage: `url(${BgImg3})` }}
    >
      <div className="bg-[#FDF0EA] w-[210px] h-[160px] rounded-[16px] flex items-center justify-center absolute top-[7%] left-[-9%]">
        <img className="w-[167px] h-[65px]" src={KinaciLogo} alt="kinaciLogo" />
      </div>
      <div className="info-text w-[1129px] flex justify-around items-center rounded-[16px] bg-[#0528417d] h-[179px] absolute bottom-[3%] left-[1%] z-10">
        <div className="text-white text-center">
          <h1 className="text-[50px] font-semibold">4 Bin</h1>
          <p className="text-[15px]">Mutlu Müşteri</p>
        </div>
        <div className="text-white text-center">
          <h1 className="text-[50px] font-semibold">4 Bin</h1>
          <p className="text-[15px]">Mutlu Müşteri</p>
        </div>
        <div className="text-white text-center">
          <h1 className="text-[50px] font-semibold">4 Bin</h1>
          <p className="text-[15px]">Mutlu Müşteri</p>
        </div>
        <div className="text-white text-center">
          <h1 className="text-[50px] font-semibold">4 Bin</h1>
          <p className="text-[15px]">Mutlu Müşteri</p>
        </div>
        <div className="text-white text-center">
          <h1 className="text-[50px] font-semibold">4 Bin</h1>
          <p className="text-[15px]">Mutlu Müşteri</p>
        </div>
      </div>
    </div>
  );
}

export default InfoSec;
