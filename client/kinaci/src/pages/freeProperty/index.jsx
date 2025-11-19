import BackGroundSec from "../../components/backgroundSec";
import PrintSec from "../../components/prinntSec";
import FreePropertyImg from "../../assets/freeProperty.jpg";
import SearchFilter from "../../components/searchFilter/searchFilter";

function FreeProperty() {
  return (
    <div>
      <div className="relative overflow-visible z-[1]">
        <BackGroundSec bgColor="#fdf2ee" />
        <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-full max-w-5xl z-[50]">
          <SearchFilter />
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-1 items-center gap-6 m-[50px_0px] px-4 md:px-0">
        <h2 className="text-[28px] font-semibold mt-[2rem] md:mt-0">Pulsuz əmlak seçimi</h2>
        <div
          className="w-full h-[500px] bg-no-repeat bg-cover bg-center rounded-[12px] mb-[37px] "
          style={{ backgroundImage: `url(${FreePropertyImg})` }}
        ></div>
        <p className="px-[40px]">
          Türkiyə daşınmaz əmlak bazarında çoxlu təkliflər var və bu siyahı hər
          həftə böyüyür; Bunları təkbaşına öyrənmək çox çətindir, xüsusən də
          türkcə bilmirsinizsə. Kınacı Qrupu bu işi sizin üçün sadələşdirməyə
          hazırdır!
          <br />
          <br />
          Şəxsi daşınmaz əmlak seçimi üçün sorğu buraxın; Bir gün ərzində biz
          sizə verilənlər bazamızdan sorğularınıza ən yaxşı cavab verəcək xüsusi
          təkliflər göndərəcəyik. Hər bir obyekt üçün texniki xüsusiyyətlərin,
          dəqiq yerin və cari fotoşəkillərin ətraflı təsvirini təqdim edəcəyik.
          <br />
          <br />
          Hər bir müştəri ilə rus dilli şəxsi menecer işləyir. Bu yanaşma agentə
          alıcının istəklərini ətraflı şəkildə araşdırmaq və son nəticədə ən
          uyğun əmlakı təklif etmək imkanı verir.
          <br />
          <br />
          Biz vicdanla və şəffaf işləyirik, mülkiyyət şəhadətnaməsi alınana
          qədər məsləhət, mənzil seçimi və əməliyyatın dəstəklənməsi üçün
          alıcıdan heç bir komissiya almırıq.
          <br />
          <br />
          İşimizin keyfiyyəti artıq minlərlə müştəri tərəfindən yüksək
          qiymətləndirilib. Biz nəinki düzgün daşınmaz əmlakı seçib əməliyyatı
          düzgün həyata keçiririk, həm də sizin xaricdəki həyata uyğunlaşmanıza
          kömək edirik.
        </p>
      </div>
      <PrintSec />
    </div>
  );
}

export default FreeProperty;
