import PrintSec from "../../components/prinntSec";
import BackGroundSec from "../../components/backgroundSec";
import FreePropertyImg from "../../assets/freeProperty.jpg";
import SearchFilter from "../../components/searchFilter/searchFilter";

function OnlineTour() {
  return (
    <div>
      <div className="relative overflow-visible z-[1]">
        <BackGroundSec bgColor="#fdf2ee" />
        <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-full max-w-5xl z-[50]">
          <SearchFilter />
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-1 items-center gap-6 m-[50px_0px]">
        <h2 className="text-[28px] font-semibold">Onlayn Tur</h2>
        <div
          className="w-full h-[500px] bg-no-repeat bg-cover bg-center rounded-[12px] mb-[37px]"
          style={{ backgroundImage: `url(${FreePropertyImg})` }}
        ></div>
        <p className="px-[40px]">
          Türkiyədə daşınmaz əmlak almağı planlaşdırırsınız, lakin tam səyahət
          üçün kifayət qədər vaxtınız yoxdur? Kınacı Group şirkəti xaricdən olan
          alıcılara obyektlərə onlayn baxılmasını təklif edir.
          <br />
          <br />
          Menecerimiz sizinlə videozəng üçün əlverişli vaxt və rabitə kanalı ilə
          razılaşacaq və sonra seçilmiş obyekti sizə göstərəcək. Lazım gələrsə,
          otağın hər küncünə baxacaq, mebel və məişət texnikasını göstərəcək,
          pəncərədən, balkondan və ya terrasdan mənzərəni göstərəcək, həmçinin
          mövcud infrastrukturu göstərmək üçün kompleksi gəzəcək.
          <br />
          <br />
          Yayım onlayn həyata keçirildiyi üçün real mənzərəni görəcəyinizə əmin
          ola bilərsiniz. Administrator monitorinq zamanı yaranan sualları da
          cavablandıracaq.
          <br />
          <br />
          Onlayn skan etmək üçün Skype, WhatsApp və ya sizin üçün əlverişli olan
          digər xidmətdən istifadə edirik.
          <br />
          <br />
          Onlayn şəkildə obyekt seçməklə yanaşı, əmlakın alınması və yenidən
          qeydiyyatı üçün hüquqi prosesi də məsafədən həyata keçirmək mümkündür.
        </p>
      </div>
      <PrintSec />
    </div>
  );
}

export default OnlineTour;
