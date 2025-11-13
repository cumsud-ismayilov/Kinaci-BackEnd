import { Link } from "react-router";
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
        className="fotter-top h-full bg-cover p-[5rem] bg-center"
        style={{ backgroundImage: `url(${BackGround})` }}
      >
        <div className="grid grid-cols-4 gap-4">
          <div className="side1 flex flex-col gap-[24px]">
            <img className="w-[173px]" src={FooterLogo} alt="pageLogo" />
            <p className="text-white">
              Kınacı Qrup tikinti və daşınmaz əmlak xidmətləri sektorunda{" "}
              <b>30 illik təcrübəyə malik şirkətlər qrupudur.</b>
            </p>
            <div className="navLeft flex gap-[25px]">
              <Link>
                <p>
                  <FaceBook />
                </p>
              </Link>
              <Link>
                <p>
                  <Instagram />
                </p>
              </Link>
              <Link>
                <p>
                  <Twitter />
                </p>
              </Link>
              <Link>
                <p>
                  <Linkedin />
                </p>
              </Link>
              <Link>
                <p>
                  <Youtube />
                </p>
              </Link>
            </div>
          </div>
          <div className="side2 text-white flex flex-col gap-[18px]">
            <p className="h-[47px] text-[22px] font-medium relative before:absolute before:left-0 before:bottom-0 before:h-[4px] before:w-10 before:bg-[#ED6B2C] before:rounded-full before:content-['']">
              Keçidlər
            </p>
            <ul className="list-disc flex flex-col gap-[4px] ">
              <li className="hover:text-orange-500 transition-all duration-300 ease-in-out">
                <Link>Kınacı Əmlak haqqında</Link>
              </li>
              <li className="hover:text-orange-500 transition-all duration-300 ease-in-out">
                <Link>Azərbaycanda daşınmaz əmlak</Link>
              </li>
              <li className="hover:text-orange-500 transition-all duration-300 ease-in-out">
                <Link>Bizim xidmətlər</Link>
              </li>
              <li className="hover:text-orange-500 transition-all duration-300 ease-in-out">
                <Link>Geribildirim verin</Link>
              </li>
              <li className="hover:text-orange-500 transition-all duration-300 ease-in-out">
                <Link>Bizimlə əlaqə saxlayın</Link>
              </li>
            </ul>
          </div>
          <div className="side3 text-white flex flex-col gap-[18px]"> 
            <p className="h-[47px] text-[22px] font-medium relative before:absolute before:left-0 before:bottom-0 before:h-[4px] before:w-10 before:bg-[#ED6B2C] before:rounded-full before:content-['']">
             Elektron bülleten
            </p>
            <form>
              <input type="text" placeholder="E-poçt ünvanınızı daxil edin..." className="bg-white p-[16px_10px] rounded-[12px] h-[50px] w-[260px] text-black text-[14px] outline-none" />
            </form>
            <button className="p-[12px_32px] bg-[#ED6B2C] text-white rounded-[10px] w-[130px]">Saxla</button>
            <p className="text-[#ffffff73] text-[13px] italic">Biz sizə lazımsız e-poçt göndərməyəcəyik!</p>
          </div>
          <div className="side4  text-white flex flex-col gap-[18px]">
            <p className="h-[47px] text-[22px] font-medium relative before:absolute before:left-0 before:bottom-0 before:h-[4px] before:w-10 before:bg-[#ED6B2C] before:rounded-full before:content-['']">
             Kommunikasiya
            </p>
            <p className="flex gap-[8px] w-[292px] items-center hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"><Location/>Alanya Mahmutlar Yenili Prospekti No: 11</p>
            <p className="flex gap-[8px] items-center hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"><Envelope/>info@gmail.com</p>
            <p className="flex gap-[8px] items-center hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"><Phone/>+994514586806</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom p-[1rem_5rem] bg-[#052841]">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-[30px]">
            <p className="text-white text-[15px]"><Link to="/">İstifadə şərtləri</Link></p>
            <p className="text-white text-[15px]"><Link to="/">Gizlilik</Link></p>
          </div>
          <p className="text-white text-[15px] text-center">© Kınacı Gayrimenkul – Tüm hakları saklıdır</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
