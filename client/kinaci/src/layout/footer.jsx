import { Link } from "react-router-dom";
import BackGround from "../assets/footerBackGround.jpg";
import FooterLogo from "../assets/logoFooter-fc4666aa.png";
import FaceBook from "../icons/faceBook";
import Instagram from "../icons/instagram";
import Twitter from "../icons/twitter";
import Linkedin from "../icons/linkedin";
import Youtube from "../icons/youtube";
import Location from "../icons/location";
import Envelope from "../icons/envelope";
import Phone from "../icons/phone";

function Footer() {
  return (
    <footer className="">
      <div
        className="fotter-top h-full bg-cover bg-center p-6 lg:p-[5rem]"
        style={{ backgroundImage: `url(${BackGround})` }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="side1 flex flex-col gap-[24px] text-left items-start">
            <img
              className="w-[150px] lg:w-[173px]"
              src={FooterLogo}
              alt="pageLogo"
            />

            <p className="text-white text-[14px] lg:text-[16px] leading-[22px]">
              Kınacı Qrup tikinti və daşınmaz əmlak xidmətləri sektorunda{" "}
              <b>30 illik təcrübəyə malik şirkətlər qrupudur.</b>
            </p>

            <div className="navLeft flex gap-[20px]">
              <Link>
                <FaceBook />
              </Link>
              <Link>
                <Instagram />
              </Link>
              <Link>
                <Twitter />
              </Link>
              <Link>
                <Linkedin />
              </Link>
              <Link>
                <Youtube />
              </Link>
            </div>
          </div>

          {/* LINKS */}
          <div className="side2 text-white flex flex-col gap-[18px] text-left">
            <p className="text-[20px] lg:text-[22px] font-medium relative before:absolute before:left-0 before:bottom-0 before:h-[4px] before:w-10 before:bg-[#ED6B2C] before:rounded-full before:content-[''] pb-1">
              Keçidlər
            </p>

            <ul className="flex flex-col gap-[6px] text-[14px]">
              {[
                "Kınacı Əmlak haqqında",
                "Azərbaycanda daşınmaz əmlak",
                "Bizim xidmətlər",
                "Geribildirim verin",
                "Bizimlə əlaqə saxlayın",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-orange-500 transition-all duration-300 cursor-pointer"
                >
                  <Link>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="side3 text-white flex flex-col gap-[18px] text-left items-start">
            <p className="text-[20px] lg:text-[22px] font-medium relative before:absolute before:left-0 before:bottom-0 before:h-[4px] before:w-10 before:bg-[#ED6B2C] before:rounded-full before:content-[''] pb-1">
              Elektron bülleten
            </p>

            <form className="w-full">
              <input
                type="text"
                placeholder="E-poçt ünvanınızı daxil edin..."
                className="bg-white p-[14px] rounded-[12px] h-[50px] w-full max-w-[260px] text-black text-[14px] outline-none"
              />
            </form>

            <button className="p-[12px_32px] bg-[#ED6B2C] text-white rounded-[10px] w-[130px]">
              Saxla
            </button>

            <p className="text-[#ffffff73] text-[13px] italic">
              Biz sizə lazımsız e-poçt göndərməyəcəyik!
            </p>
          </div>

          <div className="side4 text-white flex flex-col gap-[18px] text-left items-start">
            <p className="text-[20px] lg:text-[22px] font-medium relative before:absolute before:left-0 before:bottom-0 before:h-[4px] before:w-10 before:bg-[#ED6B2C] before:rounded-full before:content-[''] pb-1">
              Kommunikasiya
            </p>

            <p className="flex gap-[8px] items-center hover:text-orange-500 transition-all duration-300 cursor-pointer max-w-[270px]">
              <Location /> Alanya Mahmutlar Yenili Prospekti No: 11
            </p>

            <p className="flex gap-[8px] items-center hover:text-orange-500 transition-all duration-300 cursor-pointer">
              <Envelope /> info@gmail.com
            </p>

            <p className="flex gap-[8px] items-center hover:text-orange-500 transition-all duration-300 cursor-pointer">
              <Phone /> +994514586806
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom p-6 lg:p-[1rem_5rem] bg-[#052841]">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-4 items-start lg:items-center">
          <div className="flex gap-[30px] text-[15px] text-white">
            <Link>İstifadə şərtləri</Link>
            <Link>Gizlilik</Link>
          </div>

          <p className="text-white text-[15px]">
            © Kınacı Gayrimenkul – Tüm hakları saklıdır
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
