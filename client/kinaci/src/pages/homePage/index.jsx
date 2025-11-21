import { useEffect, useState } from "react";
import PrintSec from "../../components/prinntSec";
import { getAllCompanies } from "../../services";
import ProductCard from "../../components/productCard";
import { useContext } from "react";
import { FavoriteContext } from "../../context/favoriteContext";
import InputSec from "../about/inputSec";
import HomeSwipper from "../../components/homeSwipper";
import { Link } from "react-router-dom";
import SearchSection from "../../components/searchFilter/searchFilter";
import AllCitySlider from "../contact/slider/allCitySlider";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [up, setUp] = useState(false);
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const [activeFilter, setActiveFilter] = useState("Satışda");

  // Products yüklə
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await getAllCompanies();
  //       setProducts(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, [up]);
  useEffect(() => {
    (async () => {
      try {
        const data = await getAllCompanies();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    if (activeFilter === "Hamısı") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((p) => p.transactionType === activeFilter)
      );
    }
  }, [products, activeFilter]);

  return (
    <>
      <HomeSwipper />
      <SearchSection className="-mt-[122px]" />
      <section className="pt-[4rem] pb-[4rem]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 pb-[25px] items-center px-[11px] lg:px-0">
          <div>
            <h1 className="text-[22px] font-semibold">Ölkələrə görə elanlar</h1>
            <p className="text-[13px]">
              İstədiyiniz evləri ölkəyə görə tapa bilərsiniz.
            </p>
          </div>

          <div className="flex justify-start lg:justify-end mt-2 lg:mt-0">
            <button className="bg-[#2582C1] text-white px-4 py-2 rounded-[6px] text-[13px]">
              <Link to="/possessions">Bütün Ölkələri Gör</Link>
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <AllCitySlider />
        </div>
      </section>
      <section className="bg-[#E9F2F9] pt-[3rem]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 pb-[25px] items-center px-[11px] lg:px-0">
          <div>
            <h1 className="text-[22px] font-semibold">Yeni Gayrimenkuller</h1>
            <p className="text-[13px]">En son eklenen gayrimenkuller</p>
          </div>

          <div className="flex flex-row lg:justify-end gap-2 mt-2 lg:mt-0">
            <button
              className={`border rounded-[5px] px-2 py-1 text-[15px] ${
                activeFilter === "Satışda"
                  ? "bg-[#ED6B2C] text-white border-[#ED6B2C]"
                  : "text-[#ED6B2C] border-[#ED6B2C]"
              }`}
              onClick={() => setActiveFilter("Satışda")}
            >
              Satılık
            </button>
            <button
              className={`border rounded-[5px] px-2 py-1 text-[15px] ${
                activeFilter === "Kirayə"
                  ? "bg-[#ED6B2C] text-white border-[#ED6B2C]"
                  : "text-[#ED6B2C] border-[#ED6B2C]"
              }`}
              onClick={() => setActiveFilter("Kirayə")}
            >
              Kiralık
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-full sm:max-w-[480px] lg:max-w-5xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] px-[11px]">
          {filteredProducts.slice(0, 6).map((product) => (
            <ProductCard
              {...product}
              key={product.id}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto flex justify-center pt-[3rem] pb-[3rem]">
          <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_40px] text-[15px] cursor-pointer">
            <Link to="/possessions"> Daha Fazla Yükle</Link>
          </button>
        </div>
      </section>
      <section className="bg-[#FDF0EA] pt-[3rem]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 pb-[25px] items-center px-[11px] lg:px-0">
          <div>
            <h1 className="text-[22px] font-semibold">Kampaniyalı Əmlaklar</h1>
            <p className="text-[13px]">Ən cəlbedici qiymətlər.</p>
          </div>

          <div className="flex justify-start lg:justify-end mt-2 lg:mt-0">
            <button className="bg-[#2582C1] text-white px-4 py-2 rounded-[6px] text-[13px]">
              <Link to="/possessions">Bütün Kampaniyalara Baxın</Link>
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-full sm:max-w-[480px] lg:max-w-5xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] px-[11px]">
          {filteredProducts.slice(0, 6).map((product) => (
            <ProductCard
              {...product}
              key={product.id}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto flex justify-center pt-[3rem] pb-[3rem]">
          <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_40px] text-[15px] cursor-pointer">
            <Link to="/possessions">Daha Fazla Yükle</Link>
          </button>
        </div>
      </section>
      <section className="bg-[#E9F2F9] pt-[3rem]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 pb-[25px] items-center px-[11px] lg:px-0">
          <div>
            <h1 className="text-[22px] font-semibold">Ən Yaxşı Təkliflər</h1>
            <p className="text-[13px]">Sizin üçün xüsusi təkliflərimiz.</p>
          </div>

          <div className="flex justify-start lg:justify-end mt-2 lg:mt-0">
            <button className="bg-[#2582C1] text-white px-4 py-2 rounded-[6px] text-[13px]">
              <Link to="/possessions">Bütün Kampaniyalara Baxın</Link>
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-full sm:max-w-[480px] lg:max-w-5xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] px-[11px]">
          {filteredProducts.slice(0, 6).map((product) => (
            <ProductCard
              {...product}
              key={product.id}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto flex justify-center pt-[3rem] pb-[3rem]">
          <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_40px] text-[15px] cursor-pointer">
            <Link to="/possessions">Daha Fazla Yükle</Link>
          </button>
        </div>
      </section>
      <InputSec />
      <PrintSec />
    </>
  );
}

// {singlePro.baths ?? " -"}

export default HomePage;
