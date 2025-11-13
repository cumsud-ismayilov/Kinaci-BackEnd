import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

function index({ closeModal }) {
  const [isLogin, setIsLogin] = useState(true);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,// ✅ Düz oldu
          email,
          password,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        toast.success("Qeydiyyat uğurludur ✅");
        setIsLogin(true);
      } else {
        toast.error(data.message || "Xəta baş verdi ❌");
      }
    } catch (error) {
      toast.error("Serverə qoşulmaq olmur ❌");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(data.user));
      // toast.success("Uğurla daxil oldunuz ✅");
      closeModal();
      window.location.reload();
    } else {
      toast.error(data.message);
    }
  };

  return (
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
          {/* X (Close Button) */}
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-2xl font-bold text-orange-600 hover:scale-110 transition"
          >
            ✕
          </button>

          {/* LOGIN FORM */}
          {isLogin && (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-[158px] h-[86px]"
                src="http://localhost:5173/src/assets/kinaciLogo.png"
                alt="kinaciLogo"
              />
              <h2 className="text-2xl font-bold mb-6 mt-6">Hesab</h2>
              <form
                className="flex flex-col gap-[6px]"
                action=""
                onSubmit={handleLogin}
              >
                <label className="block">E-Mail</label>
                <input
                  className="input my-2.5 px-2.5 py-4  rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px]  "
                  type="email"
                  placeholder="johndoe@john.doe"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />

                <label className="block">Şifrə</label>
                <input
                  className="input input my-2.5 px-2.5 py-4  rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] "
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />

                <button className="py-3 px-8 rounded-selectBtn w-full font-semibold gap-3 bg-orange-500 text-white hover:bg-orange-600 cursor-pointer rounded-xl">
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

          {/* REGISTER FORM */}
          {!isLogin && (
            <motion.div
              key="register"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-[158px] h-[86px]"
                src="http://localhost:5173/src/assets/kinaciLogo.png"
                alt="kinaciLogo"
              />
              <h2 className="text-2xl font-bold mb-6 mt-6">Hesab</h2>
              <form
                className="flex flex-col gap-[6px]"
                action=""
                onSubmit={handleRegister}
              >
                <label className="block">Ad & Soyad</label>
                <input
                  className="input input my-2.5 px-2.5 py-4  rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] "
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />

                <label className="block">E-Mail</label>
                <input
                  className="input input my-2.5 px-2.5 py-4  rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] "
                  type="email"
                  placeholder="johndoe@john.doe"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label className="block">Şifrə</label>
                <input
                  className="input input my-2.5 px-2.5 py-4  rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] "
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="py-3 px-8 rounded-selectBtn w-full font-semibold gap-3 bg-orange-500 text-white hover:bg-orange-600 cursor-pointer rounded-xl">
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default index;
