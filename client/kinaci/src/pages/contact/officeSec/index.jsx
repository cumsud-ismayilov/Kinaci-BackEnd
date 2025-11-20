import { Link } from "react-router-dom";
import Watsapp from "../../../icons/watsapp";
import Telegram from "../../../icons/telegram";
import Instagram from "../../../icons/instagram";

function OfficeSec() {
  return (
    <div className="pt-[24px]">
      <div className="text-center">
        <h2 className="text-[28px] font-semibold">Ofisimizi ziyarət edin</h2>
        <p className="mt-[12px]">
          Rieltorun hər ölçüdə və yerləşmə potensialında 10.000-dən çox ofisi
          var.
        </p>
      </div>
      <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 my-8 gap-6">
        <div className="text-center">
          <h3 className="text-[26px] font-semibold">Ümumi mərkəz</h3>
          <div className="flex flex-col">
            <p>Mahmutlar Yangılı cad 11</p>
            <p>Alanya / Turkey</p>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-[26px] font-semibold">Əlaqə nömrələrimiz</h3>
          <div className="flex flex-col">
            <p>
              <Link to="tel:+994514586806">+994514586806</Link>
            </p>
            <p>
              <Link to="mailto:info@gmail.com">info@gmail.com</Link>
            </p>
            <div className="navLeft flex items-center justify-center mt-[14px] gap-[25px]">
              <Link to="https://wa.link/b8r5jq" target="_blank">
                <p>
                  <Watsapp Width={"23px"} />
                </p>
              </Link>
              <Link to="https://t.me/Zeynal" target="_blank">
                <p>
                  <Telegram />
                </p>
              </Link>
              <Link to="https://www.instagram.com/mrshm_llo/" target="_blank">
                <p>
                  <Instagram />
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-[26px] font-semibold">İş saatlarımız</h3>
          <div className="flex flex-col">
            <p>Bazar ertəsi-Cümə: 9:00-19:00</p>
            <p>Şənbə: 10:00-17:00</p>
            <p className="italic text-orange-500">Bağlıdır</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeSec;
