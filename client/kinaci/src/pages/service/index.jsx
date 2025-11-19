import { Link } from "react-router";
import BackGroundSec from "../../components/backgroundSec";
import PrintSec from "../../components/prinntSec";
import ServiceCard from "./serviceCard";
import SearchFilter from "../../components/searchFilter/searchFilter";

function Service() {
  return (
    <div>
      <div className="relative overflow-visible z-[1]">
        <BackGroundSec bgColor="#fdf2ee" />
        <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-full max-w-5xl z-[50]">
          <SearchFilter />
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 m-[2rem_0rem] mt-[6rem] md:mt-[2rem] px-4 md:px-0 ">
        <ul>
          <li className="text-[22px] md:text-[26px] font-semibold">Xidmətlərimiz</li>
          <li className="text-[12px] md:text-[13px]">
            <Link to="/">Anasayfa /</Link>Xidmətlərimiz
          </li>
        </ul>
      </div>
      <div className="px-4">
      <ServiceCard />

      </div>
      <PrintSec />
    </div>
  );
}

export default Service;
