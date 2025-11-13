import PrintSec from "../../components/prinntSec";
import BackGroundSec from "../../components/backgroundSec";
import FreePropertyImg from "../../assets/freeProperty.jpg";
import SearchFilter from "../../components/searchFilter/searchFilter";

function SalesServices() {
  return (
    <div>
      <div className="relative overflow-visible z-[1]">
        <BackGroundSec bgColor="#fdf2ee" />
        <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-full max-w-5xl z-[50]">
          <SearchFilter />
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-1 items-center gap-6 m-[50px_0px]">
        <h2 className="text-[28px] font-semibold">Satış sonrası xidmət</h2>
        <div
          className="w-full h-[500px] bg-no-repeat bg-cover bg-center rounded-[12px] mb-[37px]"
          style={{ backgroundImage: `url(${FreePropertyImg})` }}
        ></div>
        <p className="px-[40px]">
          Türkiyədə daşınmaz əmlak alan müştərilərin əksəriyyətinin gündəlik
          problemlərin həllində köməyə ehtiyacı var, çünki yerli xüsusiyyətləri
          dərhal anlamaq mümkün deyil. Satış sonrası xidmət çərçivəsində Kınacı
          Qrupunun mütəxəssisləri mülk sahiblərinin olmadığı şəraitdə
          mənzillərin bütün xidmət və təmir işlərini görməyə hazırdırlar.
          <br />
          <br />
          Kınacı Qrupundan hərtərəfli xidmətlər:
          <br />
          <br />
          Kirayəçilər tapmaq və əmlakınızı icarəyə vermək. <br /> Kommunal
          xidmətlər üçün abunəçilərin qeydiyyatı və yenidən qeydiyyatı. <br />
          Vergilərin ödənilməsində köməklik. <br /> Sığorta müqavilələrinin
          imzalanması. <br /> Evin və bağ sahəsinin təmizlənməsi.
          <br />
          Təmir işlərinin təşkili, tikinti materiallarının alınması.
          <br />
          Mebel və məişət texnikasının alınması, çatdırılması və
          quraşdırılmasına nəzarət. <br /> Uşaqların təhsil müəssisələrinə cəlb
          edilməsinə köməklik. <br />
          Yaşayış icazəsi və vətəndaşlıq müraciəti üçün sənədlərin hazırlanması.{" "}
          <br />
          Biz tikilməkdə olan komplekslərə sərmayə qoyan investorlara layihənin
          gedişatı haqqında mütəmadi hesabatlar təqdim edirik.
          <br />
          <br />
          Hər bir müştəriyə beynəlxalq standartlara uyğun fərdi yanaşma və
          xidmətə zəmanət verilir. Satış sonrası xidmətdən yararlanın və özünüz
          baxın.
        </p>
      </div>
      <PrintSec />
    </div>
  );
}

export default SalesServices;
