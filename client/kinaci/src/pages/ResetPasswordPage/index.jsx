import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

export default function ResetPasswordPage() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!password) return toast.error("Yeni şifrə daxil edin");

    try {
      const res = await fetch(`${API_URL}/api/auth/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Şifrə uğurla dəyişdirildi");
        navigate("/"); // login səhifəsinə və ya home yönləndir
      } else {
        toast.error(data.message || "Xəta baş verdi");
      }
    } catch (err) {
      toast.error("Server xətası");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Yeni şifrə təyin edin</h2>
      <form className="flex flex-col gap-4 w-full max-w-sm" onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="Yeni şifrənizi daxil edin"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-3 border rounded-lg"
        />
        <button className="py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Şifrəni dəyişdir
        </button>
      </form>
    </div>
  );
}
