import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../../services";
import ThumbsGallery from "../../components/thumbsGallery/thumbsGallery";
import RoomIcon from "../../icons/roomIcon";
import BathRoom from "../../icons/BathRoom";
import Date from "../../icons/Date";
import Field from "../../icons/field";
import { Link } from "react-router";
import PrintSec from "../../components/prinntSec";
import WhatsapIcon from "../../icons/whatsapIcon";
import TelegramIcon from "../../icons/telegramIcon";
import FaceBook from "../../icons/faceBook";
import Instagram from "../../icons/instagram";
import { FavoriteContext } from "../../context/favoriteContext";
import { toast } from "react-toastify";
import BackGroundSec from "../../components/backgroundSec";

function ProductCardDetail() {
  const { id } = useParams();
  const [singlePro, setSinglePro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id); // yalnız kliklənən məhsulu alır
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

  const { favorites, setFavorites } = useContext(FavoriteContext);
  const isFav = favorites.some((item) => item.id === id);

  const toggleFavorite = () => {
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
      <BackGroundSec bgColor="#052841"></BackGroundSec>
      <div className="bg-[#f7f7f7] pt-[2rem]">
        <div className="max-w-5xl mx-auto  mb-[1rem]">
          <h1 className="text-[#052841] text-[23px] font-semibold">
            {singlePro.title}
          </h1>
          <p className="text-[#052841] text-[14px]">{singlePro.location}</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(200px,3fr)_minmax(250px,1fr)] gap-6">
          <div>
            <ThumbsGallery singlePro={singlePro} />
            <div className="bg-[#ffffff]">
              <div className="flex justify-between p-[20px_8px]">
                <div className="flex items-center gap-[8px]">
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
                <div className="flex items-center gap-[8px]">
                  <BathRoom />
                  <div>
                    <h6 className="text-[#052841] text-[14px] font-semibold">
                      Hamam
                    </h6>
                    <span className="text-[#052841] text-[13px]">
                      {singlePro.baths ?? " -"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[8px]">
                  <Date />
                  <div>
                    <h6 className="text-[#052841] text-[14px] font-semibold">
                      Çatdırılma tarixi
                    </h6>
                    <span className="text-[#052841] text-[13px]">
                      {singlePro.date}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[8px]">
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
              <div className="grid grid-cols-2 p-[32px_8px] gap-[20px]">
                <p className="text-[#052841] text-[12px]">
                  Siz bu əmlak haqqında tam məlumat və qiymət siyahısı, alış
                  prosedurunun mərhələləri, mümkün endirimlər və s. alacaqsınız
                </p>
                <button
                  onClick={toggleFavorite}
                  className={`text-[14px] border rounded-[6px] cursor-pointer transition-all duration-300 ${
                    isFav
                      ? "bg-[#dc3545] border-[#dc3545] text-white hover:opacity-80"
                      : "text-[#dc3545] border-[#dc3545] hover:bg-[#dc3545] hover:text-white"
                  }`}
                >
                  {isFav ? "Favorilərdən çıxar" : "Favoritlərə əlavə et"}
                </button>
              </div>
              <div className="bg-[#eaf3f9] m-[8px] p-[12px]">
                <h4 className="text-[20px]">Kısa Bilgiler</h4>
                <div className="grid grid-cols-3">
                  <div className="flex flex-col gap-[13px]">
                    <p className="text-[#ed6b2c]">{singlePro.location}</p>
                    <p className="text-[14px]">
                      Mülk Tipi: {singlePro.propertyType}
                    </p>
                    <p className="text-[14px]">Otaq: {singlePro.rooms}</p>
                    <p className="text-[14px]">
                      Dənizlə məsafə: {singlePro.distanceOfSea}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[13px]">
                    <p className="text-[14px]">Mərtəbə: {singlePro.floor ?? "-"}</p>
                    <p className="text-[14px]">
                      Əməliyyat növü: {singlePro.transactionType}
                    </p>
                    <p className="tetx-[14px]">
                      Hamam otağı: {singlePro.baths ?? " -"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[13px]">
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
              <div className="bg-[#eaf3f9] p-[12px_12px] mt-[3rem] mb-[3rem] ml-[8px] mr-[8px]">
                <h4 className="text-[20px]">İnfrastruktur</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {singlePro?.infrastructure?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2"
                    >
                      <span className="text-[#052841] text-[14px]">- {item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 p-[16px] gap-[10px]">
                <button className="text-[14px] p-[6px] rounded-[6px] border border-[#0dcaf0] text-[#fff] bg-[#0dcaf0]">
                  <Link to="https://wa.me/+905441380707">
                    Çevrimiçi Görüntüleme
                  </Link>{" "}
                </button>
                <button className="text-[14px] p-[6px] rounded-[6px] border border-[#212529] text-[#fff] bg-[#212529]">
                  <Link>Ücretsiz Tur</Link>
                </button>
                <button className="text-[14px] p-[6px] rounded-[6px] bg-[#ED6B2C] border border-[#ED6B2C] text-[#fff]">
                  Fiyat Listesi Al
                </button>
              </div>
              <div className="p-[32px_8px] flex flex-col gap-[14px]">
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
            <div className="bg-[#fff] mt-[14px] mb-[40px] p-[16px]">
              <h1 className="text-[21px] text-center font-semibold">
                Məlumat Almaq İstəyirəm
              </h1>
              <div className="grid grid-cols-2 gap-[10px]">
                <form>
                  <label
                    htmlFor="ad"
                    className="inline-block m-[5px_0px] text-[13px]"
                  >
                    Ad & Soyad
                  </label>
                  <input
                    type="text"
                    className="p-[12px] w-full border border-[#dee2e6] block  leading-1.5 rounded-[6px]"
                  />
                  <label
                    htmlFor="e-poçt"
                    className="inline-block m-[5px_0px] text-[13px]"
                  >
                    E-poçt
                  </label>
                  <input
                    type="email"
                    className="p-[12px] w-full border border-[#dee2e6] block leading-1.5 rounded-[6px]"
                  />
                  <label
                    htmlFor="tel"
                    className="inline-block m-[5px_0px] text-[13px]"
                  >
                    Telefon nömrəniz **
                  </label>
                  <input
                    type="text"
                    className="p-[12px] w-full border border-[#dee2e6] block leading-1.5 rounded-[6px]"
                  />
                </form>
                <div>
                  <label htmlFor="" className="block m-[5px_0px] text-[13px]">
                    Mesajınız
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    className="p-[6px_12px] border border-[#dee2e6] resize-none w-full rounded-[6px] h-[208px]"
                  ></textarea>
                </div>
              </div>
              <button className="mt-[20px] p-[8px] border border-[#ED6B2C] bg-[#ED6B2C] text-[#fff] w-full rounded-[6px] cursor-pointer">
                Sorğumu göndər
              </button>
            </div>
          </div>
          <div>
            <button className="w-full  text-[14px] p-[6px] rounded-[6px] bg-[#ED6B2C] border border-[#ED6B2C] text-[#fff] cursor-pointer">
              Əmlak ID : {singlePro.id}
            </button>
            <button className="w-full m-[16px_0px] text-[14px] p-[10px] rounded-[6px] border border-[#212529] text-[#fff] bg-[#212529]">
              Kvadrat metr : {singlePro.squareMeter}
            </button>
            <button className="w-full  text-[14px] p-[14px] rounded-[6px] border border-[#0dcaf0] text-[#fff] bg-[#0dcaf0]">
              {singlePro.price}
            </button>
            <div className="bg-[#fff] p-[15px] m-[30px_0px]">
              <h6 className="font-semibold text-[15px]">Sual verin</h6>
              <div className="w-[230px] h-[250px]">
                <img
                  src="https://kinaciproperty.com/assets/anna-666a683d.jpg"
                  className="w-full h-full rounded-[50%]"
                />
              </div>
              <h6 className="font-semibold text-[15px]">Anna Drobot</h6>
              <span className="text-[13px]">Satış Lideri</span>
              <div className="flex gap-[13px] m-[10px_0px]">
                <TelegramIcon />

                <Link
                  to="https://wa.me/+905441380707"
                  className="flex gap-[9px] items-center"
                >
                  <p className="bg-[#07bc0c] w-[26px] h-[26px] rounded-[3px]">
                    <WhatsapIcon />
                  </p>
                  <span className="text-[#ed6b2c] text-[13px]">
                    +90 (544) 138 0707
                  </span>
                </Link>
              </div>
              <p className="text-[13px]">
                E-mail :
                <Link
                  to="mailto:info@kinacigroup.com"
                  className="text-[#ed6b2c]"
                >
                  {" "}
                  info@kinacigroup.com
                </Link>
              </p>
            </div>
            <div className="bg-[#fff] p-[10px_20px] m-[10px_0px]">
              <h6 className="font-semibold text-[15px]">Məzmunu Paylaşın</h6>
              <div className="flex gap-[12px] mt-[8px]">
                <TelegramIcon />
                <Link
                  to="https://wa.me/+905441380707"
                  className="flex gap-[9px] items-center"
                >
                  <p className="bg-[#07bc0c] w-[26px] h-[26px] rounded-[3px]">
                    <WhatsapIcon />
                  </p>
                </Link>
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
              </div>
            </div>
          </div>
        </div>
        <PrintSec />
      </div>
    </>
  );
}

export default ProductCardDetail;
