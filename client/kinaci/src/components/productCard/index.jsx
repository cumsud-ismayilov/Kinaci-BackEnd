import CardSwiper from "../cardSwiper";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Bath from "../../icons/bath";
import HomeArea from "../../icons/homeArea";
import Homeicons from "../../icons/homeicons";
import { useContext, useState } from "react";
import { FavoriteContext } from "../../context/favoriteContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoginRegisterModal from "../../components/loginAndregister";

function ProductCard({
  id,
  image1,
  image2,
  title,
  location,
  rooms,
  size,
  baths,
  price,
  images,
}) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const { favorites, setFavorites } = useContext(FavoriteContext);
  const isFav = favorites.some((item) => item.id === id);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    const userData = localStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null; // null yoxlaması

    if (!user || !user._id) {
      // user məlumatı tam deyilsə də dayandır
      toast.warning("Favoritlərə əlavə etmək üçün daxil olun!");
      // openLoginModal(); // əgər modal varsa aç
      return;
    }

    let updatedFavs = [...favorites];
    if (isFav) {
      updatedFavs = updatedFavs.filter((item) => item.id !== id);
      toast.info("Favorilərdən çıxarıldı");
    } else {
      updatedFavs.push({ id, title });
      toast.success("Favorilərə əlavə olundu");
    }
    setFavorites(updatedFavs);
  };

  return (
    <div className="bg-[#fff] rounded-[7px] relative max-w-[480px] mx-auto w-full sm:w-full">
      <div
        className="h-[240px] md:h-[190px] cursor-pointer"
        onClick={() => navigate(`/product/${id}`)}
      >
        <CardSwiper {...images} />
      </div>
      <button
        onClick={toggleFavorite}
        className="absolute top-2 left-2 z-50 cursor-pointer"
      >
        {isFav ? (
          <FaHeart className="w-6 h-6 text-red-500" />
        ) : (
          <FaRegHeart className="w-6 h-6 text-red-500" />
        )}
      </button>
      <button className="text-[#fff] border bg-[#ED6B2C] border-[#ED6B2C] rounded-[5px] text-[13px] p-[3px_8px] z-50 absolute bottom-63 left-2">
        {id}
      </button>
      <div className="cardBody p-[12px]">
        <h6 className="text-[16px] font-semibold cursor-pointer min-h-[75px] leading-[20px]">
          {title}
        </h6>
        <p className="text-[14px] mb-[10px]">{location}</p>
        <div className="flex gap-[26px] mb-[10px]">
          <div className="flex items-center gap-[8px]">
            <Homeicons />
            <p>{rooms}</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <HomeArea />
            <p>{size}</p>
          </div>
        </div>
        <div className="flex justify-between mb-[10px]">
          <div className="flex items-center gap-[6px]">
            <Bath />
            <p>{baths ?? "-"}</p>
          </div>
          <button className="bg-[#2582C1] text-[#fff] p-[6px_9px] rounded-[6px] text-[13px]">
            {price}
          </button>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => setIsContactOpen(true)}
            className="text-[#212529] border border-[#212529] rounded-[5px] p-[6px_32px] text-[15px] cursor-pointer max-sm:w-[48%] max-sm:p-[10px]"
          >
            Hızlı iletişim
          </button>
          <button
            className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_40px] text-[15px] cursor-pointer  max-sm:w-[48%] max-sm:p-[10px]"
            onClick={() => navigate(`/product/${id}`)}
          >
            Detaylar
          </button>
        </div>
      </div>
      {isContactOpen && (
        <LoginRegisterModal closeModal={() => setIsContactOpen(false)} />
      )}
    </div>
  );
}

export default ProductCard;
