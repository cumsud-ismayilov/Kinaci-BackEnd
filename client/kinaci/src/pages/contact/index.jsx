import BackGroundSec from "../../components/backgroundSec";
import SearchFilter from "../../components/searchFilter/searchFilter";
import BankAccountSec from "./bankAccountSec";
import GoogleMapSec from "./googleMapSec";
import OfficeSec from "./officeSec";
import Slider from "./slider";
import PrintSec from "../../components/prinntSec";

function Contact() {
  return (
    <div className="relative z-[0]">
      {/* Background və filter birlikdə */}
      <div className="relative overflow-visible z-[1]">
        <BackGroundSec bgColor="#fdf2ee" />
        <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-full max-w-5xl z-[50]">
          <SearchFilter />
        </div>
      </div>

      {/* Map və digər hissələr */}
      <div className="relative z-[0]">
        <GoogleMapSec />
        <OfficeSec />
        <div className="p-[3rem_1rem]">
          <Slider />
        </div>
        <div className="bg-[#E9F3F9] p-[3rem]">
          <BankAccountSec />
        </div>
        <PrintSec/>
      </div>
    </div>
  );
}

export default Contact;
