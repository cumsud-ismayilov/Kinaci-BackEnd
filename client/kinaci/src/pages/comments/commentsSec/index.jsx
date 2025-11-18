import BackGroundSec from "../../../components/backgroundSec";

function CommentsSec() {
  return (
    <>
      <div className="max-w-6xl mx-auto grid grid-cols-1 mt-[2rem] px-4">
        <h1 className="text-[24px] font-semibold">Müşteri Yorumları</h1>
        <p className="text-[14px] mb-[16px]">Anasayfa / Yorumlar</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-6 mb-[2rem] px-4">
        {/* --- CARD 1 --- */}
        <div className="commentsCard flex flex-row items-start gap-4 p-[12px] mt-[15px] rounded-[10px] shadow-[0_8px_24px_#959da533]">
          <img
            className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full border-[20px] border-[#e3e9ee]"
            src="https://kinaciproperty.com/assets/Alexander-min-46839079.webp"
            alt="UserImg"
          />
          <div>
            <h6 className="text-[#495057] text-[18px] md:text-[16px] font-semibold leading-tight mb-[8px]">
              Alexander Petrov
            </h6>
            <p className="text-[#ed6b2c] text-[13px] md:text-[12px] mb-[16px]">
              Manager
            </p>
            <p className="mb-[16px] text-[14px] md:text-[12px] leading-relaxed">
              Bu sayt xəyalımdakı mənzili tapmağıma kömək etdi. Daşınmaz əmlak
              haqqında məlumat axtarmaq və tapmaq asandır. Yeganə irəliləyiş hər
              bir əmlakın daha çox fotoşəkili olardı.
            </p>
          </div>
        </div>

        {/* --- CARD 2 --- */}
        <div className="commentsCard flex flex-row items-start gap-4 p-[12px] mt-[15px] rounded-[10px] shadow-[0_8px_24px_#959da533]">
          <img
            className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full border-[20px] border-[#e3e9ee]"
            src="https://kinaciproperty.com/assets/Olga-min-ab2191ea.webp"
            alt="UserImg"
          />
          <div>
            <h6 className="text-[#495057] text-[18px] md:text-[16px] font-semibold leading-tight mb-[8px]">
              Olga Kuznetsova
            </h6>
            <p className="text-[#ed6b2c] text-[13px] md:text-[12px] mb-[16px]">
              Müəllim
            </p>
            <p className="mb-[16px] text-[14px] md:text-[12px] leading-relaxed">
              Bütün KINACI komandasına əla işlərinə görə təşəkkürümü bildirmək
              istəyirəm. Onlar xaricdəki çətin anlarda belə müştərilərinə çox
              qayğı göstərirlər. Mənzil almaq üçün sənədlərin hazırlanmasında
              mənə kömək etdilər, pul köçürmələri üçün hesab açmaqda hüquqi
              yardım göstərdilər və bütün prosesi təşkil etdilər ki, ofislərdə
              vaxt itirməyim lazım olmasın. Onlar çox mehriban və müştərilərinə
              qarşı diqqətlidirlər. Köməyə görə çox minnətdaram!!
            </p>
          </div>
        </div>

        {/* Daha çox kart eyni formatda əlavə edə bilərsən */}
      </div>
    </>
  );
}

export default CommentsSec;
