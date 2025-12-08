import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { createPortal } from "react-dom";
import KinaciLogo from "../../assets/kinaciLogo.png";

function AuthModal({ closeModal }) {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, phone, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(
          "Qeydiyyat uğurludur! Email-ə göndərilən link ilə hesabınızı təsdiqləyin."
        );
        setIsLogin(true);
      } else {
        toast.error(data.message || "Xəta baş verdi");
      }
    } catch (error) {
      toast.error("Serverə qoşulmaq olmur");
    }
  };

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        closeModal();
        window.location.reload();
      } else {
        if (res.status === 403) toast.warning(data.message);
        else toast.error(data.message);
      }
    } catch (err) {
      toast.error("Server xətası");
    }
  };

  // FORGOT PASSWORD
  const handleForgotPassword = async () => {
    if (!forgotEmail) return toast.error("Email daxil edin");

    try {
      const res = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Şifrə bərpa linki email-ə göndərildi");
        setIsForgotPassword(false);
        setForgotEmail("");
        setIsLogin(true);
      } else {
        toast.error(data.message || "Xəta baş verdi");
      }
    } catch (err) {
      toast.error("Server xətası");
    }
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-8 w-[690px] rounded-xl relative shadow-xl"
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-2xl font-bold text-orange-600 hover:scale-110 transition"
          >
            ✕
          </button>

          {/* LOGIN */}
          {isLogin && !isForgotPassword && (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.3 }}
            >
              <img className="w-[158px] h-[86px]" src={KinaciLogo} alt="kinaciLogo" />
              <h2 className="text-2xl font-bold mb-6 mt-6">Hesab</h2>
              <form className="flex flex-col gap-[6px]" onSubmit={handleLogin}>
                <label>E-Mail</label>
                <input
                  className="input my-2.5 px-2.5 py-4 rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full text-xs h-[50px]"
                  type="email"
                  placeholder="johndoe@john.doe"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                <label>Şifrə</label>
                <input
                  className="input my-2.5 px-2.5 py-4 rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full text-xs h-[50px]"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />

                <p className="mt-2 text-right text-sm">
                  <button
                    type="button"
                    className="text-blue-600 hover:underline"
                    onClick={() => {
                      setIsForgotPassword(true);
                      setIsLogin(false);
                    }}
                  >
                    Şifrəni unutmusunuz?
                  </button>
                </p>

                <button className="py-3 px-8 w-full font-semibold gap-3 bg-orange-500 text-white hover:bg-orange-600 cursor-pointer rounded-xl">
                  Daxil ol
                </button>
              </form>

              <p className="mt-4 text-sm text-center">
                Hesabınız yoxdur?
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-orange-600 font-semibold ml-1 cursor-pointer"
                >
                  Qeydiyyatdan keç
                </button>
              </p>
            </motion.div>
          )}

          {/* REGISTER */}
          {!isLogin && !isForgotPassword && (
            <motion.div
              key="register"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.3 }}
            >
              <img className="w-[158px] h-[86px]" src={KinaciLogo} alt="kinaciLogo" />
              <h2 className="text-2xl font-bold mb-6 mt-6">Hesab</h2>
              <form className="flex flex-col gap-[6px]" onSubmit={handleRegister}>
                <label>Ad & Soyad</label>
                <input
                  className="input my-2.5 px-2.5 py-4 rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full text-xs h-[50px]"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <label>Telefon</label>
                <input
                  className="input my-2.5 px-2.5 py-4 rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full text-xs h-[50px]"
                  type="text"
                  placeholder="0501234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label>E-Mail</label>
                <input
                  className="input my-2.5 px-2.5 py-4 rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full text-xs h-[50px]"
                  type="email"
                  placeholder="johndoe@john.doe"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Şifrə</label>
                <input
                  className="input my-2.5 px-2.5 py-4 rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full text-xs h-[50px]"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="py-3 px-8 w-full font-semibold gap-3 bg-orange-500 text-white hover:bg-orange-600 cursor-pointer rounded-xl">
                  Qeydiyyatdan keç
                </button>
              </form>

              <p className="mt-4 text-sm text-center">
                Hesabınız var?
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-orange-600 font-semibold ml-1 cursor-pointer"
                >
                  Daxil ol
                </button>
              </p>
            </motion.div>
          )}

          {/* FORGOT PASSWORD */}
          {isForgotPassword && (
            <motion.div
              key="forgot-password"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 mt-6">Şifrəni bərpa et</h2>
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleForgotPassword();
                }}
              >
                <label>Emailinizi daxil edin</label>
                <input
                  type="email"
                  placeholder="Qeydiyyatdan keçdiyiniz email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="input px-2.5 py-4 rounded-xl border border-blue-900/25 focus-within:border-blue-900 w-full text-xs h-[50px]"
                />

                <button
                  type="submit"
                  className="py-3 px-8 w-full font-semibold gap-3 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer rounded-xl"
                >
                  Şifrəni bərpa et
                </button>
              </form>

              <p className="mt-4 text-sm text-center">
                Hesabınıza giriş etmək istəyirsiniz?
                <button
                  className="text-orange-600 font-semibold ml-1 cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Daxil ol
                </button>
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export default AuthModal;
