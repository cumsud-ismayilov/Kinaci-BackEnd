import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function ProductInquiryForm({ productId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setFormData({
        name: storedUser.name || "",
        email: storedUser.email || "",
        phone: storedUser.phone || "",
        message: "",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      toast.warning("Sorğu göndərmək üçün əvvəlcə daxil olun!");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Mesajınızı daxil edin!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: storedUser.name,
          email: storedUser.email,
          phone: storedUser.phone,
          message: formData.message,
          productId,
        }),
      });

      if (!res.ok) throw new Error("Sorğu göndərilmədi");

      toast.success("Sorğunuz uğurla göndərildi!");
      setFormData((prev) => ({ ...prev, message: "" })); // yalnız mesaj sıfırlansın
    } catch (err) {
      toast.error("Xəta baş verdi: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fff] mt-4 p-4 rounded">
      <h1 className="text-[21px] text-center font-semibold mb-3">
        Məlumat Almaq İstəyirəm
      </h1>

      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        onSubmit={handleSubmit}
      >
        {/* Sol sütun */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[13px]">
            Ad & Soyad
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            readOnly
            className="p-2 w-full border rounded bg-gray-100 cursor-not-allowed"
          />

          <label htmlFor="email" className="text-[13px]">
            E-poçt
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            readOnly
            className="p-2 w-full border rounded bg-gray-100 cursor-not-allowed"
          />

          <label htmlFor="phone" className="text-[13px]">
            Telefon nömrəniz
          </label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            readOnly
            className="p-2 w-full border rounded bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Sağ sütun */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-[13px]">
            Mesajınız
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-2 border w-full rounded h-48 resize-none"
          />
        </div>

        {/* Submit düyməsi */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="mt-3 w-full p-2 bg-[#ED6B2C] text-white rounded"
          >
            {loading ? "Göndərilir..." : "Sorğumu göndər"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductInquiryForm;
