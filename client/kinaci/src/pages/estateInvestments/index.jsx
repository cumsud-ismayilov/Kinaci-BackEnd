import BackGroundSec from "../../components/backgroundSec";
import PrintSec from "../../components/prinntSec";
import FreePropertyImg from "../../assets/freeProperty.jpg";
import SearchFilter from "../../components/searchFilter/searchFilter";

function EstateInvestments() {
  return (
    <div>
      <div className="relative overflow-visible z-[1]">
        <BackGroundSec bgColor="#fdf2ee" />
        <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-full max-w-5xl z-[50]">
          <SearchFilter />
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-1 items-center gap-6 m-[50px_0px]">
        <h2 className="text-[28px] font-semibold">Əmlak İnvestisiyaları</h2>
        <div
          className="w-full h-[500px] bg-no-repeat bg-cover bg-center rounded-[12px] mb-[37px]"
          style={{ backgroundImage: `url(${FreePropertyImg})` }}
        ></div>
        <p className="px-[40px]">
          Kınacı Qrup Türkiyədə daşınmaz əmlakla gəlirli maliyyə əməliyyatları
          üzrə təcrübəli mütəxəssisdir. Biz respublikada investisiya cəlbedici
          əmlakların seçimində fərdi məsləhət və şəxsi xidmət təklif edirik.
          <br />
          <br />
          İnvestisiya məqsədlərindən asılı olaraq, mütəxəssislərimiz unikal
          şərtlər seçəcək və maksimum gəlirliliyi və tez geri qaytarılmasını
          təmin edəcək layihələr təklif edəcəklər.
          <br />
          <br />
          Kınacı Qrupu xaricdən gələn investorlara aşağıdakıları təklif edir:
          <br />
          <br />
          mümkün qədər tez satış üçün maye obyektlərin fərdi seçimi;
          rentabelliyin təhlili və icarəyə verilən daşınmaz əmlakın
          rentabelliyinin hesablanması; Zəmanətli kirayə müqaviləsi əsasında
          mənzillərin etibarlı idarə edilməsi.
          <br />
          <br />
          Biz kirayəçilər və gələcək alıcılar arasında hansı əmlakın tələb
          olunduğunu dəqiq bilirik və müştərilərimizə ağlabatan dividendlər
          təqdim edə biləcəyik.
          <br />
          <br />
          Biz öz işimizdə Türkiyə mənzil bazarında dəyişən vəziyyətə tez
          reaksiya verməyə imkan verən yaxşı qurulmuş əməliyyat mexanizmlərindən
          istifadə edirik. Suallarınızı cavablandıracağıq, sizə nəyə investisiya
          etməyin daha sərfəli olduğunu, riskləri necə azaltmaq və daha çox
          qazana biləcəyinizi söyləyəcəyik!
        </p>
      </div>
      <PrintSec />
    </div>
  );
}

export default EstateInvestments;
