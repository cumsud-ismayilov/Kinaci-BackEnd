import InputSecImg from "../../../assets/inputSecImg.jpg";
import KinaciLogo from "../../../assets/logoFooter-fc4666aa.png";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function InputSec() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    // Login olmuş istifadəçi məlumatlarını avtomatik doldur
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      if (user && user._id) {
        setFormData({
          name: user.name || "",
          phone: user.phone || "",
          email: user.email || "",
        });
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = localStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null;

    if (!user || !user._id) {
      toast.warning("Formu göndərmək üçün daxil olun!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userId: user._id }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Məlumat uğurla göndərildi ✅");
      } else {
        toast.error(data.message || "Xəta baş verdi ❌");
      }
    } catch (err) {
      toast.error("Serverə qoşulmaq olmur ❌");
    }
  };

  return (
    <section className="inputSec bg-[#F4F9FC] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        {/* --- Form --- */}
        <div className="bg-white rounded-[7px] p-6 md:p-[24px] h-full">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <h1 className="text-2xl md:text-[26px] font-semibold mb-2">
                Bilgi Almak İstiyorum
              </h1>
              <p className="text-sm md:text-[14px] text-gray-600">
                Lütfen formu doldurun
              </p>
            </div>

            <div className="flex flex-col gap-3 md:gap-[9px]">
              <div>
                <label htmlFor="ad" className="block text-sm md:text-[14px] mb-1">
                  Ad & Soyad
                </label>
                <input
                  type="text"
                  id="ad"
                  value={formData.name}
                  readOnly
                  className="w-full border border-[#dee2e6] rounded-[6px] p-3 text-sm md:text-[14px] bg-gray-100 cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm md:text-[14px] mb-1">
                  Telefon
                </label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                 
                  className="w-full border border-[#dee2e6] rounded-[6px] p-3 text-sm md:text-[14px] bg-gray-100 cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm md:text-[14px] mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  readOnly
                  className="w-full border border-[#dee2e6] rounded-[6px] p-3 text-sm md:text-[14px] bg-gray-100 cursor-not-allowed"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 md:mt-[20px] w-full bg-[#ED6B2C] hover:bg-orange-600 text-white text-sm md:text-base font-medium py-3 rounded-[15px] transition"
            >
              Saxla və Göndər
            </button>
          </form>
        </div>

        {/* --- Image --- */}
        <div className="relative w-full h-[250px] md:h-auto">
          <img
            src={InputSecImg}
            alt="KinaciImg"
            className="w-full h-full object-cover rounded-[7px]"
          />
          <img
            src={KinaciLogo}
            alt="KinaciLogo"
            className="absolute bottom-2 right-2 w-36 h-12 md:w-[158px] md:h-[50px]"
          />
        </div>
      </div>
    </section>
  );
}

export default InputSec;
