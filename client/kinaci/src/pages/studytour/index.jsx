import PrintSec from "../../components/prinntSec";
import BackGroundSec from "../../components/backgroundSec";
import FreePropertyImg from "../../assets/freeProperty.jpg";
import SearchFilter from "../../components/searchFilter/searchFilter";

function StudyTour() {
  return (
    <div>
      <div className="relative overflow-visible z-[1]">
        <BackGroundSec bgColor="#fdf2ee" />
        <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-full max-w-5xl z-[50]">
          <SearchFilter />
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-1 items-center gap-6 m-[50px_0px]  px-4 md:px-0">
        <h2 className="text-[28px] font-semibold mt-[2rem] md:mt-0">Tədris Turu</h2>
        <div
          className="w-full h-[500px] bg-no-repeat bg-cover bg-center rounded-[12px] mb-[37px]"
          style={{ backgroundImage: `url(${FreePropertyImg})` }}
        ></div>
        <p className="px-[40px]">
          Yüz dəfə eşitməkdənsə, bir dəfə görmək yaxşıdır. Və bu, həqiqətən də
          doğrudur. Kınacı Group şirkəti müştərilərinə Türkiyəyə pulsuz gəzinti
          turu təklif edir. Bu xidmət daşınmaz əmlak seçmək və sonra satın almaq
          üçün Aralıq dənizi sahillərinə səfər etmək istəyən hər kəsə açıqdır.
          <br />
          <br />
          Kınacı Qrupundan öyrənmə turu proqramı:
          <br />
          <br />
          Hava limanında qarşılanma və transfer. <br /> Rahat mənzillərdə
          yoxlayın. <br />
          Şəhər və rayon gəzinti turu. <br /> Müştərinin seçdiyi daşınmaz əmlak
          obyektlərinin nümayişi. <br /> Fərdi alış və ödəniş şərtlərinin
          müzakirəsi. <br />
          Sənədlərin toplanmasında və bank hesabının açılmasında köməklik.{" "}
          <br />
          Əməliyyatın tam hüquqi dəstəyi. <br /> Hava limanına transfer.
          <br />
          <br />
          Tədris səfərinin orta müddəti 5 təqvim günüdür. Bu dəfə seçilmiş
          mənzilləri araşdırmaq, dincəlmək və cənub günəşindən həzz almaq, milli
          mətbəxdən həzz almaq və Türk Rivierasının təbii qoruqları və əsas
          görməli yerləri ilə tanış olmaq üçün kifayətdir. Şirkətin rusdilli
          mütəxəssisi şərq respublikasında olduğunuz müddətdə sizi müşayiət
          edəcək.
          <br />
          <br />
          Daşınmaz əmlak alacağınız təqdirdə bütün səyahət xərclərini biz
          qarşılayacağıq!
        </p>
      </div>
      <PrintSec />
    </div>
  );
}

export default StudyTour;
