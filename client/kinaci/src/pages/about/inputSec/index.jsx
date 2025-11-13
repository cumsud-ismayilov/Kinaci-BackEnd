import InputSecImg from "../../../assets/inputSecImg.jpg";
import KinaciLogo from "../../../assets/logoFooter-fc4666aa.png";
import { useState } from "react";
import { toast } from "react-toastify";

function InputSec() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Login yoxlaması
    const userData = localStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null;

    if (!user || !user._id) {
      toast.warning("Formu göndərmək üçün daxil olun!");
      return;
    }

    if (!name || !phone || !email) {
      toast.error("Zəhmət olmasa bütün sahələri doldurun!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, userId: user._id }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Məlumat uğurla göndərildi ✅");
        setName("");
        setPhone("");
        setEmail("");
      } else {
        toast.error(data.message || "Xəta baş verdi ❌");
      }
    } catch (err) {
      toast.error("Serverə qoşulmaq olmur ❌");
    }
  };

  return (
    <section className="inputSec bg-[#F4F9FC] p-[50px_0px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div className="bg-[#fff] rounded-[7px] h-full">
          <form onSubmit={handleSubmit} className="p-[24px]">
            <div className="my-3">
              <h1 className="mb-[8px] text-[26px] font-semibold">
                Bilgi Almak İstiyorum
              </h1>
              <p className="text-[14px]">Lütfen formu doldurun</p>
              <div className="form-group mt-[24px] flex flex-col gap-[9px]">
                <label htmlFor="ad" className="mb-2 block text-[14px]">
                  Ad &amp; Soyad
                </label>
                <input
                  type="text"
                  id="ad"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control border-1 border-[#dee2e6] p-[10px] text-[14px] rounded-[6px] w-full text-[#212529] outline-none"
                  placeholder="Adınızı ve Soyadınız girin"
                />
                <label htmlFor="phone" className="mb-2 block text-[14px]">
                  Telefon
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefon numaranızı girin"
                  className="form-control border-1 border-[#dee2e6] p-[10px] text-[14px] rounded-[6px] w-full text-[#212529] outline-none"
                />
                <label className="mb-2 block text-[14px]" htmlFor="email">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control border-1 border-[#dee2e6] p-[10px] text-[14px] rounded-[6px] w-full text-[#212529] outline-none"
                  placeholder="E-Mail adresinizi girin"
                />
              </div>
              <button type="submit" className="p-[15px] rounded-[15px] m-[20px_0px] w-full bg-[#ED6B2C] text-white cursor-pointer">
                Saxla və Göndər
              </button>
            </div>
          </form>
        </div>
        <div className="550px relative">
          <img src={InputSecImg} alt="KinaciImg" />
          <img
            className="absolute bottom-[14px] right-[-14px] w-[158px] h-[50px]"
            src={KinaciLogo}
            alt="KinaciLogo"
          />
        </div>
      </div>
    </section>
  );
}

export default InputSec;
