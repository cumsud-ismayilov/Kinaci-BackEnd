import { Link, useLocation } from "react-router-dom";

import Envelope from "../icons/envelope";
import Phone from "../icons/phone";
import Include from "../icons/include";
import Heart from "../icons/heart";
import DownArrow from "../icons/downArrow";
import kinaciLogo from "../assets/kinaciLogo.png";
import FaceBook from "../icons/faceBook";
import Instagram from "../icons/instagram";
import Twitter from "../icons/twitter";
import Linkedin from "../icons/linkedin";
import Youtube from "../icons/youtube";
import { useEffect, useState } from "react";
import Upchewron from "../icons/upchewron";
import FavoriteModal from "../components/favouriteModal";
import { useContext } from "react";
import { FavoriteContext } from "../context/favoriteContext";
import AuthModal from "../components/loginAndregister/";
import { toast } from "react-toastify";

function Navbar() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("/");
  const [isEmlakOpen, setIsEmlakOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState("/");
  const [isFav, setIsFav] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { favorites } = useContext(FavoriteContext);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    // toast.info("Hesabdan çıxış etdiniz ✅");
    window.location.reload();
  };

  useEffect(() => {
    const path = location.pathname;
    setActiveMenu(path);
  }, [location.pathname]);

  const hoverLink = (path) =>
    `hover:text-orange-500 text-[15px] font-medium ${
      hoverMenu === path ? "text-orange-500" : "text-[#052841]"
    }`;
  const linkClass = (path) =>
    `cursor-pointer  h-full  flex items-center hover:text-orange-500 ${
      activeMenu === path
        ? "text-orange-500 border-b-2 border-orange-500"
        : "text-[#052841]"
    }`;

  return (
    <>
      <header>
        <div className="navTop bg-blue-50 flex justify-between px-44 py-2.5">
          <div className="headerLeft flex gap-[10px]">
            <button className="bg-[#2582C1] text-white  rounded-[5px] p-[6px_8px]">
              <Link className="flex justify-center items-center  gap-[5px] text-[14px] font-semibold leading-[14px]">
                <Envelope /> info@kinacigroup.com
              </Link>
            </button>
            <button className="bg-[#ED6B2C] text-white rounded-[5px] p-[6px_8px]">
              <Link className="flex justify-center items-center gap-[5px] text-[14px] font-semibold leading-[14px]">
                <Phone /> +90(544) 138 07 07
              </Link>
            </button>
            {user ? (
              <div className="flex items-center gap-[10px]">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <span className="text-[14px] font-semibold text-[#052841]">
                  {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white rounded-[5px] px-3 py-1 text-[14px] font-semibold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="bg-white text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_8px]"
              >
                <span className="flex justify-center items-center gap-[5px] text-[14px] font-semibold leading-[14px] cursor-pointer">
                  <Include /> Daxil ol
                </span>
              </button>
            )}
          </div>
          <div className="headerRight flex gap-[10px] relative">
            <button
              className="p-[6px_8px] rounded-[5px] bg-[#E21743] text-white flex gap-[6px] justify-center items-center text-[14px] font-semibold leading-[14px]"
              onClick={() => setIsFav(true)}
            >
              Favoritlərim ({favorites.length}) <Heart />
            </button>

            {isFav && (
              <FavoriteModal setIsFav={setIsFav} favorites={favorites} />
            )}
          </div>
        </div>
        <nav className="h-[95px] flex items-center justify-between px-44  shadow-[0_10px_10px_0_rgba(0,0,0,0.03)]">
          <div className="navRight flex items-center justify-center gap-[40px] h-full">
            <Link to="/">
              <img
                className="w-[167px] h-[65px]"
                src={kinaciLogo}
                alt="kinaciLogo"
              />
            </Link>
            <ul className="flex gap-[20px] h-full text-[14px] font-semibold leading-[14px]">
              <li className="h-full relative">
                <Link
                  to="/"
                  className={linkClass("/")}
                  onClick={() => setActiveMenu("/")}
                >
                  Ana Səhifə
                </Link>
              </li>

              <li className="group relative">
                <Link
                  to="/possessions"
                  className={`${linkClass("/possessions")} gap-[4px]`}
                  onClick={() => {
                    setActiveMenu("/possessions");
                    setIsEmlakOpen(!isEmlakOpen);
                  }}
                >
                  Əmlak {isEmlakOpen ? <Upchewron /> : <DownArrow />}
                </Link>
                <ul className="flex flex-col gap-[10px] absolute w-[280px] bg-white  shadow-[0_4px_22px_0_rgba(5,40,65,0.1)] p-[1rem] top-[102%] rounded-tl-none rounded-[10px] z-9999 opacity-0 invisible group-hover: opacity-100 group-hover:visible  transition-all duration-300">
                  <li>
                    <Link
                      to="/forSale"
                      className={`${hoverLink("/")}`}
                      onClick={() => setHoverMenu("/")}
                    >
                      Satılır
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="forRent"
                      className={`${hoverLink("/forRent")}`}
                      onClick={() => setHoverMenu("/forRent")}
                    >
                      Kirayə
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="soldPossessions"
                      className={`${hoverLink("/soldPossessions")}`}
                      onClick={() => setHoverMenu("/soldPossessions")}
                    >
                      Satılmış Əmlak
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  to="/about"
                  className={linkClass("/about")}
                  onClick={() => setActiveMenu("/about")}
                >
                  Şirkət haqqında
                </Link>
              </li>

              <li className="group relative">
                <Link
                  to="/service"
                  className={`${linkClass("/service")} gap-[4px]`}
                  onClick={() => {
                    setActiveMenu("/service");
                    setIsEmlakOpen(!isEmlakOpen);
                  }}
                >
                  Xidmətlərimiz {isEmlakOpen ? <Upchewron /> : <DownArrow />}
                </Link>
                <ul className="flex flex-col gap-[10px] absolute w-[280px] bg-white  shadow-[0_4px_22px_0_rgba(5,40,65,0.1)] p-[1rem] top-[102%] rounded-tl-none rounded-[10px] z-9999 opacity-0 invisible group-hover: opacity-100 group-hover:visible  transition-all duration-300">
                  <li>
                    <Link
                      to="/freeProperty"
                      className={`${hoverLink("/")}`}
                      onClick={() => setHoverMenu("/")}
                    >
                      Pulsuz əmlak seçimi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/estateInvestments"
                      className={`${hoverLink("/estateInvestments")}`}
                      onClick={() => setHoverMenu("/estateInvestments")}
                    >
                      Daşınmaz Əmlak İnvestisiyaları
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/studyTour"
                      className={`${hoverLink("/studyTour")}`}
                      onClick={() => setHoverMenu("/studyTour")}
                    >
                      Tədris Turu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/salesServices"
                      className={`${hoverLink("/salesServices")}`}
                      onClick={() => setHoverMenu("/salesServices")}
                    >
                      Satış sonrası xidmət
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/onlineTour"
                      className={`${hoverLink("/onlineTour")}`}
                      onClick={() => setHoverMenu("/onlineTour")}
                    >
                      Onlayn tur
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/selectionPortfolio"
                      className={`${hoverLink("/selectionPortfolio")}`}
                      onClick={() => setHoverMenu("/selectionPortfolio")}
                    >
                      Portfolioların fərdi seçimi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/support"
                      className={`${hoverLink("/support")}`}
                      onClick={() => setHoverMenu("/support")}
                    >
                      Satınalma zamanı dəstək
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  to="/contact"
                  className={linkClass("/contact")}
                  onClick={() => setActiveMenu("/contact")}
                >
                  Əlaqə
                </Link>
              </li>

              <li>
                <Link
                  to="/comments"
                  className={linkClass("/comments")}
                  onClick={() => setActiveMenu("/comments")}
                >
                  Şərhlər
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className={linkClass("/blog")}
                  onClick={() => setActiveMenu("/blog")}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
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
        </nav>
      </header>
      {isAuthOpen && <AuthModal closeModal={() => setIsAuthOpen(false)} />}
    </>
  );
}

export default Navbar;
