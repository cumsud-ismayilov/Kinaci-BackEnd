import Closebutton from "../../icons/closebutton";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { FavoriteContext } from "../../context/favoriteContext";
import { toast } from "react-toastify";

function FavoriteModal({ setIsFav }) {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const removeFavorite = (id) => {
    const updatedFavs = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavs);
    toast.info(`favorilərdən çıxarıldı`);
  };

  const filteredFavs = favorites.filter((fav) => fav.id && fav.title);

  return (
    <div className="bg-white p-[10px] rounded-[7px] absolute bottom-0 top-[122%] z-999 min-h-[250px]  shadow-lg">
      <div className="flex items-center justify-between border-b-2 border-b-[rgb(243,243,243)] mb-2">
        <h2 className="text-[24px]">Beğendiklerim</h2>
        <Closebutton setIsFav={setIsFav} />
      </div>

      <ul className="space-y-2 mt-2">
        {filteredFavs.length > 0 ? (
          filteredFavs.map((fav) => (
            <li
              key={fav.id}
              className="flex items-center gap-[10px] text-[13px]"
            >
              <button onClick={() => removeFavorite(fav.id)}>
                <FaHeart className="text-red-500 w-5 h-5" />
              </button>
              <span>{fav.title}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-400">Favori yoxdur</p>
        )}
      </ul>
    </div>
  );
}

export default FavoriteModal;
