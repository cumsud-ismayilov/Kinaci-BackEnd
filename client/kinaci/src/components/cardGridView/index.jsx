import { useContext } from "react";
import CardSwipperv2 from "../cardSwipperv2";
import { useNavigate } from "react-router";
import { FavoriteContext } from "../../context/favoriteContext";
import { toast } from "react-toastify";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Bath from "../../icons/bath";
import HomeArea from "../../icons/homeArea";
import Homeicons from "../../icons/homeicons";

function CardGridView({ data }) {
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const navigate = useNavigate();

const toggleFavorite = (item) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    toast.warning("Favorilərə əlavə etmək üçün daxil olun!");
    return;
  }

  const { id, title } = item;
  if (!id || !title) return;

  const isFav = favorites.some((fav) => fav.id === id);
  let updatedFavs = [...favorites];

  if (isFav) {
    updatedFavs = updatedFavs.filter((fav) => fav.id !== id);
    toast.info(`Favorilərdən çıxarıldı`);
  } else {
    updatedFavs.push({ id, title });
    toast.success(`Favorilərə əlavə olundu`);
  }

  setFavorites(updatedFavs);
};


  return (
    <div className="max-w-5xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
      {data.map((item) => {
        const isFav = favorites.some((fav) => fav.id === item.id);

        return (
          <div key={item.id} className="bg-[#fff] rounded-[7px] relative">
            <div
              className="h-[190px] cursor-pointer"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <CardSwipperv2 item={item} />
            </div>

            <button
              onClick={() => toggleFavorite(item)}
              className="absolute top-2 left-2 z-50 cursor-pointer"
            >
              {isFav ? (
                <FaHeart className="w-6 h-6 text-red-500" />
              ) : (
                <FaRegHeart className="w-6 h-6 text-red-500" />
              )}
            </button>

            <button className="text-[#fff] border bg-[#ED6B2C] border-[#ED6B2C] rounded-[5px] text-[13px] p-[3px_8px] z-50 absolute bottom-63 left-2">
              {item.id}
            </button>

            <div className="cardBody p-[12px]">
              <h6 className="text-[16px] font-semibold cursor-pointer min-h-[75px] leading-[20px]">
                {item.title}
              </h6>
              <p className="text-[14px] mb-[10px]">{item.location}</p>

              <div className="flex gap-[26px] mb-[10px]">
                <div className="flex items-center gap-[8px]">
                  <Homeicons />
                  <p>{item.rooms}</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <HomeArea />
                  <p>{item.size}</p>
                </div>
              </div>

              <div className="flex justify-between mb-[10px]">
                <div className="flex items-center gap-[6px]">
                  <Bath />
                  <p>{item.baths ?? "-"}</p>
                </div>
                <button className="bg-[#2582C1] text-[#fff] p-[6px_9px] rounded-[6px] text-[13px]">
                  {item.price}
                </button>
              </div>
              <div className="flex justify-between">
                <button className="text-[#212529] border border-[#212529] rounded-[5px] p-[6px_32px] text-[15px] cursor-pointer max-sm:w-[48%] max-sm:p-[10px]">
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
          </div>
        );
      })}
    </div>
  );
}

export default CardGridView;
