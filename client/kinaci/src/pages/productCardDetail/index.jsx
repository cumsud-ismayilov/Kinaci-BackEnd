import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../../services";
import ThumbsGallery from "../../components/thumbsGallery/thumbsGallery";
import RoomIcon from "../../icons/roomIcon";
import BathRoom from "../../icons/BathRoom";
import Date from "../../icons/Date";
import Field from "../../icons/field";
import { Link } from "react-router-dom";
import PrintSec from "../../components/prinntSec";
import WhatsapIcon from "../../icons/watsapp";
import TelegramIcon from "../../icons/telegramIcon";
import FaceBook from "../../icons/faceBook";
import Instagram from "../../icons/instagram";
import HomeIcon from "../../icons/homeicon2";
import { FavoriteContext } from "../../context/favoriteContext";
import { toast } from "react-toastify";
import BackGroundSec from "../../components/backgroundSec";
import SearchFilter from "../../components/searchFilter/searchFilter";
import ProductInquiryForm from "./ProductInquiryForm";
import { formatAZDateSlash } from "../../utils/formatDate";



function ProductCardDetail() {
  const { id } = useParams();
  const [singlePro, setSinglePro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { favorites, setFavorites } = useContext(FavoriteContext);
  const isFav = favorites.some((item) => item.id === id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setSinglePro(data);
      } catch (err) {
        setError(err.message || "Məhsulu gətirərkən xəta baş verdi");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="p-6">Yüklənir...</p>;
  if (error) return <p className="p-6 text-red-500">Xəta: {error}</p>;

  const toggleFavorite = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      toast.warning("Favorilere əlavə etmək üçün daxil olun!");
      return;
    }

    if (!id || !singlePro?.title) return;

    setFavorites((prevFavs) => {
      const exists = prevFavs.some((item) => item.id === id);
      if (exists) {
        toast.info("Favorilərdən çıxarıldı", { toastId: "fav-removed" });
        return prevFavs.filter((item) => item.id !== id);
      } else {
        toast.success("Favorilərə əlavə olundu", { toastId: "fav-added" });
        return [...prevFavs, { id, title: singlePro.title }];
      }
    });
  };

  return (
    <>
      <div className="relative overflow-visible z-[1]">
        <BackGroundSec bgColor="#052841">
          <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-full max-w-5xl z-[50]">
            <SearchFilter />
          </div>
        </BackGroundSec>
      </div>

      <div className="bg-[#f7f7f7] pt-[6rem] lg:pt-[2rem] px-3 lg:px-0">
        <div className="max-w-5xl mx-auto mb-4">
          <h1 className="text-[#052841] text-[23px] font-semibold">
            {singlePro.title}
          </h1>
          <p className="text-[#052841] text-[14px]">{singlePro.location}</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(200px,3fr)_minmax(250px,1fr)] gap-6">
          <div className="flex flex-col gap-4">
            <ThumbsGallery singlePro={singlePro} />

            <div className="bg-[#fff]">
              <div className="flex flex-col lg:flex-row justify-between p-4 lg:p-5 gap-4 lg:gap-0">
                <div className="flex items-center gap-3">
                  <RoomIcon />
                  <div>
                    <h6 className="text-[#052841] text-[14px] font-semibold">
                      Yataq Otağı
                    </h6>
                    <span className="text-[#052841] text-[13px]">
                      {singlePro.rooms}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BathRoom />
                  <div>
                    <h6 className="text-[#052841] text-[14px] font-semibold">
                      Hamam
                    </h6>
                    <span className="text-[#052841] text-[13px]">
                      {singlePro.baths ?? "-"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Date />
                  <div>
                    <h6 className="text-[#052841] text-[14px] font-semibold">
                      Çatdırılma tarixi
                    </h6>
                    <span className="text-[#052841] text-[13px]">
                      {formatAZDateSlash(singlePro?.date)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Field />
                  <div>
                    <h6 className="text-[#052841] text-[14px] font-semibold">
                      Ərazi (m2)
                    </h6>
                    <span className="text-[#052841] text-[13px]">
                      {singlePro.size}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 lg:p-8">
                <p className="text-[#052841] text-[12px]">
                  Siz bu əmlak haqqında tam məlumat və qiymət siyahısı, alış
                  prosedurunun mərhələləri, mümkün endirimlər və s. alacaqsınız
                </p>
                <button
                  onClick={toggleFavorite}
                  className={`text-[14px] border rounded-[6px] cursor-pointer transition-all duration-300 w-full sm:w-auto h-[43px] sm:h-auto ${
                    isFav
                      ? "bg-[#dc3545] border-[#dc3545] text-white hover:opacity-80"
                      : "text-[#dc3545] border-[#dc3545] hover:bg-[#dc3545] hover:text-white"
                  }`}
                >
                  {isFav ? "Favorilərdən çıxar" : "Favoritlərə əlavə et"}
                </button>
              </div>

              <div className="bg-[#eaf3f9] p-4 mt-4 rounded mx-[6px]">
                <h4 className="text-[18px] font-semibold mb-3">
                  Kısa Bilgiler
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#ed6b2c]">{singlePro.location}</p>
                    <p className="text-[14px]">
                      Mülk Tipi: {singlePro.propertyType}
                    </p>
                    <p className="text-[14px]">Otaq: {singlePro.rooms}</p>
                    <p className="text-[14px]">
                      Dənizlə məsafə: {singlePro.distanceOfSea}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[14px]">
                      Mərtəbə: {singlePro.floor ?? "-"}
                    </p>
                    <p className="text-[14px]">
                      Əməliyyat növü: {singlePro.transactionType}
                    </p>
                    <p className="text-[14px]">
                      Hamam otağı: {singlePro.baths ?? "-"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[14px]">
                      Vətəndaşlıq çərçivəsində: {singlePro.citizenship}
                    </p>
                    <p className="text-[14px]">
                      Yatırım Amaçlı: {singlePro.investment}
                    </p>
                    <p className="text-[14px]">
                      Oturma izni çərçivəsində: {singlePro.residencePermit}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#eaf3f9] p-4 mt-4 rounded mx-[6px]">
                <h4 className="text-[18px] font-semibold mb-3">
                  İnfrastruktur
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {singlePro?.infrastructure?.map((item, idx) => (
                    <div key={idx} className="text-[14px]">
                      - {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 mx-[6px]">
                <button className="w-full text-[14px] p-2 rounded border bg-[#0dcaf0] text-white">
                  <Link to="https://wa.me/+905441380707">
                    Çevrimiçi Görüntüleme
                  </Link>
                </button>
                <button className="w-full text-[14px] p-2 rounded border bg-[#212529] text-white">
                  <Link>Ücretsiz Tur</Link>
                </button>
                <button className="w-full text-[14px] p-2 rounded border bg-[#ED6B2C] text-white">
                  Fiyat Listesi Al
                </button>
              </div>

              <div className="p-4 mt-4 flex flex-col gap-2">
                <h6 className="font-semibold">Təsvir</h6>
                <p>
                  Duis mattis laoreet neque, et ornare neque sollicitudin at.
                  Proin sagittis dolor sed mi elementum prim. Donec ve justo
                  ante. Vivamus egestas sodales est, eu rhoncus urna semper eu.
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Tamsayı tristique elit
                </p>
                <p>
                  Duis mattis laoreet neque, et ornare neque sollicitudin at.
                  Proin sagittis dolor sed mi elementum prim. Donec ve justo
                  ante. Vivamus egestas sodales est, eu rhoncus urna semper eu.
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Tamsayı tristique elit lobortis purus bibendum,
                  quis dictum metus mattis. Phasellus posuere felis sed eros
                  porttitor mattis.
                </p>
              </div>
            </div>

            <ProductInquiryForm productId={id} />
          </div>

          <div className="flex flex-col gap-4">
            <button className="w-full p-2 bg-[#ED6B2C] text-white rounded border">
              Əmlak ID : {singlePro.id}
            </button>
            <button className="w-full p-2 bg-[#212529] text-white rounded border">
              Kvadrat metr : {singlePro.squareMeter}
            </button>
            <button className="w-full p-2 bg-[#0dcaf0] text-white rounded border">
              {singlePro.price}
            </button>

            <div className="bg-[#fff] p-4 rounded flex flex-col items-center gap-2">
              <img
                src="https://kinaciproperty.com/assets/anna-666a683d.jpg"
                className="w-[150px] h-[150px] rounded-full"
              />
              <h6 className="font-semibold">Anna Drobot</h6>
              <span className="text-[13px]">Satış Lideri</span>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <Link to="#">
                  <WhatsapIcon />
                </Link>
                <Link to="#">
                  <TelegramIcon />
                </Link>
                <Link to="#">
                  <FaceBook />
                </Link>
                <Link to="#">
                  <Instagram />
                </Link>
              </div>
            </div>

            <div className="bg-[#fff] p-3 rounded border border-[#ED6B2C]">
              <div className="flex items-center gap-2">
                <HomeIcon />
                <h3 className="text-[15px]">Digər ərazilərdəki əmlaklar</h3>
              </div>
              <ul className="mt-2 flex flex-col gap-1 text-[13px]">
                <li>
                  <Link to="/possessions?city=İstanbul">İstanbul</Link>
                </li>
                <li>
                  <Link to="/possessions?city=Kuşadası">Kuşadası</Link>
                </li>
                <li>
                  <Link to="/possessions?city=Alanya">Alanya</Link>
                </li>
                <li>
                  <Link to="/possessions?city=Antalya">Antalya</Link>
                </li>
                <li>
                  <Link to="/possessions?city=Kıbrıs">Kıbrıs</Link>
                </li>
                <li>
                  <Link to="/possessions?city=Bodrum">Bodrum</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <PrintSec />
      </div>
    </>
  );
}

export default ProductCardDetail;
