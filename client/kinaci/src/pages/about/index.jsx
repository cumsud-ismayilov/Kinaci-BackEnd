import BackGroundSec from "../../components/backgroundSec";
import PrintSec from "../../components/prinntSec";
import BackImg1 from "../../assets/kinaci1-min-184c0796.webp";
import KinaciDesc from "./kinaciDesc";
import InfoSec from "./infoSec";
import OurGroup from "./ourGroup";
import BestForYou from "./bestForYou";
import InputSec from "./inputSec";
import Certificate from "./cerficateSec";
import SearchFilter from "../../components/searchFilter/searchFilter";

function About() {
  return (
    <>
      <div className="relative overflow-visible z-[1]">
        <BackGroundSec bgColor="#fdf2ee" />

        <div
          className="absolute top-[44px] left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 md:px-0 z-[50]"
        >
          <SearchFilter />
        </div>
      </div>

      <div className="img-banner w-full h-[370px] bg-no-repeat bg-cover mt-[6rem] md:mt-0 hidden md:block">
        {" "}
        <img className="w-full h-full " src={BackImg1} alt="Imgbanner" />{" "}
      </div>

      <div>
        <div className="px-4 md:px-0 mt-[6rem] md:mt-0">
          <KinaciDesc />
        </div>
        <div className="px-4 md:px-0">
          <InfoSec />
        </div>
        <OurGroup />
        <BestForYou />
        <InputSec />
        <PrintSec />
      </div>
    </>
  );
}

export default About;
