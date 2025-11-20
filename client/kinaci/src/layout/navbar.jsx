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

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // null, "emlak", "xidmet", və s.

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // scroll-u bağlayır
    } else {
      document.body.style.overflow = "auto"; // scroll-u açır
    }

    return () => {
      document.body.style.overflow = "auto"; // unmount zamanı bərpa edir
    };
  }, [isMenuOpen]);

  return (
    <>
      <header>
        <div
          className="
  navTop 
  bg-blue-50 
  flex justify-between items-center 
  px-4 py-3
  lg:px-44 lg:py-2.5
"
        >
          {/* ===== HAMBURGER — MOBİL ===== */}
          <button
            className="lg:hidden text-[#052841] text-3xl"
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>

          {/* ===== DESKTOP SOL PANEL ===== */}
          <div className="headerLeft hidden lg:flex gap-[10px]">
            <button className="bg-[#2582C1] text-white rounded-[5px] p-[6px_8px]">
              <Link to="mailto:info@kinacigroup.com" className="flex justify-center items-center gap-[5px] text-[14px] font-semibold leading-[14px]">
                <Envelope /> info@kinacigroup.com
              </Link>
            </button>

            <button className="bg-[#ED6B2C] text-white rounded-[5px] p-[6px_8px]">
              <Link to="tel:+994514586806" className="flex justify-center items-center gap-[5px] text-[14px] font-semibold leading-[14px]">
                <Phone /> +90(544) 138 07 07
              </Link>
            </button>

            {/* === DESKTOP USER === */}
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
                <span className="flex justify-center items-center gap-[5px] text-[14px] font-semibold cursor-pointer">
                  <Include /> Daxil ol
                </span>
              </button>
            )}
          </div>

          {/* ===== MOBİL MƏRKƏZ — BURADA USER GÖRÜNƏCƏK ===== */}
          <div className="flex items-center lg:hidden">
            {user ? (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="text-[14px] font-semibold text-[#052841]">
                  {user.name}
                </span>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="bg-[#ED6B2C] text-white px-4 py-2 rounded-md text-[14px] font-semibold"
              >
                Daxil ol
              </button>
            )}
          </div>

          {/* ===== FAVORİTLƏR — HƏM MOBİL, HƏM DESKTOP ===== */}
          <div className="headerRight flex gap-[10px] relative">
            <button
              className="p-[6px_8px] rounded-[5px] bg-[#E21743] text-white flex gap-[6px] justify-center items-center text-[14px] font-semibold leading-[14px]"
              onClick={() => setIsFav(true)}
            >
              Favorilərim ({favorites.length}) <Heart />
            </button>

            {isFav && (
              <FavoriteModal setIsFav={setIsFav} favorites={favorites} />
            )}
          </div>
        </div>

        <nav className="h-[95px] flex items-center justify-between px-4 lg:px-44 shadow-[0_10px_10px_0_rgba(0,0,0,0.03)]">
          {/* MOBİL MENU */}
          <div className="flex items-center justify-between w-full lg:hidden">
            {/* LOGO */}
            <Link to="/">
              <img
                className="w-[140px] h-auto"
                src={kinaciLogo}
                alt="kinaciLogo"
              />
            </Link>

            {/* SOCIAL ICONS */}
            <div className="flex gap-[18px]">
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
          <div className="navRight hidden lg:flex items-center justify-center gap-[40px] h-full">
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
          <div className="navLeft hidden lg:flex gap-[25px]">
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
        {/* === MOBILE RIGHT SLIDE MENU === */}
        {/* MOBILE MENU */}
        <div
          className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-xl z-[99999]
  transform transition-transform duration-300 
  ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-5 py-6 border-b border-gray-200">
            <h2 className="text-[20px] font-bold text-[#052841]">
              Tez keçidlər
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[28px] text-[#052841] p-2 hover:rotate-90 transition"
            >
              ✕
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col px-5 py-4">
            {/* USER LOGOUT */}
            {user && (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold mb-2"
              >
                Çıxış et
              </button>
            )}
            {/* Ana Səhifə */}
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-[17px] font-semibold py-3 text-orange-500"
            >
              Ana Səhifə
            </Link>

            {/* ƏMLAK */}
            <div className="border-b border-gray-100 pb-1">
              <div className="w-full flex justify-between items-center py-3">
                {/* Sol tərəf — Əmlak səhifəsinə yönləndirir */}
                <Link
                  to="/possessions"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[17px] font-semibold text-[#052841]"
                >
                  Əmlak
                </Link>

                {/* Sağ tərəf — submenu açıb bağlayır */}
                <button
                  onClick={() =>
                    setOpenSubMenu(openSubMenu === "emlak" ? null : "emlak")
                  }
                  className="text-[17px] font-semibold text-[#052841]"
                >
                  {openSubMenu === "emlak" ? "▲" : "▼"}
                </button>
              </div>

              {/* Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 pl-3 
      ${openSubMenu === "emlak" ? "max-h-40" : "max-h-0"}`}
              >
                <Link
                  to="/forSale"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-[16px] text-[#052841]"
                >
                  Satılır
                </Link>
                <Link
                  to="/forRent"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-[16px] text-[#052841]"
                >
                  Kirayə
                </Link>
                <Link
                  to="/soldPossessions"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-[16px] text-[#052841]"
                >
                  Satılmış Əmlak
                </Link>
              </div>
            </div>

            {/* Şirkət haqqında */}
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-[17px] font-semibold py-3 text-[#052841]"
            >
              Şirkət haqqında
            </Link>

            {/* Xidmətlərimiz */}
            <div className="border-b border-gray-100 pb-1">
              <div className="w-full flex justify-between items-center py-3">
                {/* Sol tərəf — xidmət səhifəsinə yönləndirir */}
                <Link
                  to="/service"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[17px] font-semibold text-[#052841]"
                >
                  Xidmət
                </Link>

                {/* Sağ tərəf — submenu açıb bağlayır */}
                <button
                  onClick={() =>
                    setOpenSubMenu(openSubMenu === "xidmet" ? null : "xidmet")
                  }
                  className="text-[17px] font-semibold text-[#052841]"
                >
                  {openSubMenu === "xidmet" ? "▲" : "▼"}
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 pl-3 
      ${openSubMenu === "xidmet" ? "max-h-70" : "max-h-0"}`}
              >
                <Link to="/freeProperty" className="block py-2 text-[#052841]">
                  Pulsuz əmlak seçimi
                </Link>
                <Link
                  to="/estateInvestments"
                  className="block py-2 text-[#052841]"
                >
                  Daşınmaz Əmlak İnvestisiyaları
                </Link>
                <Link to="/studyTour" className="block py-2 text-[#052841]">
                  Tədris Turu
                </Link>
                <Link to="/salesServices" className="block py-2 text-[#052841]">
                  Satış sonrası xidmət
                </Link>
                <Link to="/onlineTour" className="block py-2 text-[#052841]">
                  Onlayn tur
                </Link>
                <Link
                  to="/selectionPortfolio"
                  className="block py-2 text-[#052841]"
                >
                  Portfolioların fərdi seçimi
                </Link>
                <Link to="/support" className="block py-2 text-[#052841]">
                  Satınalma zamanı dəstək
                </Link>
              </div>
            </div>

            {/* Extras */}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-[17px] font-semibold py-3 text-[#052841]"
            >
              Əlaqə
            </Link>
            <Link
              to="/comments"
              onClick={() => setIsMenuOpen(false)}
              className="text-[17px] font-semibold py-3 text-[#052841]"
            >
              Şərhlər
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="text-[17px] font-semibold py-3 text-[#052841]"
            >
              Blog
            </Link>
          </div>

          {/* FOOTER */}
          <div className="px-5 py-4 border-t border-gray-200">
            <p className="text-[#052841] font-bold text-[15px]">
              Müştəri Xidmətləri
            </p>
            <p className="text-[#052841] text-[18px] font-semibold mt-1">
              +994 (51) 458 68 06
            </p>

            <p className="mt-6 text-[#052841] font-semibold">Bizi izləyin</p>

            <div className="flex gap-4 mt-3 text-[22px] text-[#052841]">
              <FaceBook />
              <Instagram />
              <Twitter />
              <Linkedin />
              <Youtube />
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-white/10 backdrop-blur-sm z-[99990]"
          ></div>
        )}
      </header>
      {isAuthOpen && <AuthModal closeModal={() => setIsAuthOpen(false)} />}
    </>
  );
}

export default Navbar;
