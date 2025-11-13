import CardSwiper from "../cardSwiper";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Bath from "../../icons/bath";
import HomeArea from "../../icons/homeArea";
import Homeicons from "../../icons/homeicons";
import { useContext } from "react";
import { FavoriteContext } from "../../context/favoriteContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";




function ProductCard({ id, image1, image2, title, location, rooms, size, baths, price ,images}) {
const { favorites, setFavorites } = useContext(FavoriteContext);
  const isFav = favorites.some((item) => item.id === id);
  const navigate = useNavigate();


  const toggleFavorite = () => {
    if (!id || !title) return; // boşu əlavə etmə
    let updatedFavs = [...favorites];
    if (isFav) {
      updatedFavs = updatedFavs.filter((item) => item.id !== id);
       toast.info(`favorilərdən çıxarıldı`);
    } else {
      updatedFavs.push({ id, title });
      toast.success(`favorilərə əlavə olundu`);
    }
    setFavorites(updatedFavs);
  };

  return (
    <div className="bg-[#fff] rounded-[7px] relative">
      <div className="h-[190px] cursor-pointer" onClick={() => navigate(`/product/${id}`)}>
        <CardSwiper {...images} />
      </div>
      <button onClick={toggleFavorite} className="absolute top-2 left-2 z-50 cursor-pointer">
        {isFav ? <FaHeart className="w-6 h-6 text-red-500" /> : <FaRegHeart className="w-6 h-6 text-red-500" />}
      </button>
       <button className="text-[#fff] border bg-[#ED6B2C] border-[#ED6B2C] rounded-[5px] text-[13px] p-[3px_8px] z-50 absolute bottom-63 left-2">{id}</button>
      <div className="cardBody p-[12px]">
        <h6 className="text-[16px] font-semibold cursor-pointer min-h-[75px] leading-[20px]">
          {title}
        </h6>
        <p className="text-[14px] mb-[10px]">{location}</p>
        <div className="flex gap-[26px] mb-[10px]">
          <div className="flex items-center gap-[8px]"><Homeicons /><p>{rooms}</p></div>
          <div className="flex items-center gap-[8px]"><HomeArea /><p>{size}</p></div>
        </div>
        <div className="flex justify-between mb-[10px]">
          <div className="flex items-center gap-[6px]"><Bath /><p>{baths ?? "-"}</p></div>
          <button className="bg-[#2582C1] text-[#fff] p-[6px_9px] rounded-[6px] text-[13px]">{price}</button>
        </div>
        <div className="flex justify-between">
          <button className="text-[#212529] border border-[#212529] rounded-[5px] p-[6px_32px] text-[15px] cursor-pointer">Hızlı iletişim</button>
          <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_40px] text-[15px] cursor-pointer" onClick={() => navigate(`/product/${id}`)}>Detaylar</button>
        </div>
      </div>
    </div>
  );
}

// {singlePro.baths ?? " -"}

export default ProductCard;
