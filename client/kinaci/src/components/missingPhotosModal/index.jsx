import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Lottie from "lottie-react";
import animationData from "../../animations/attention.json";

function index() {
  const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // scroll-u bağla
    } else {
      document.body.style.overflow = "auto";   // scroll-u aç
    }

    // Cleanup: component unmount zamanı scroll-u aç
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;
    return createPortal(
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-9999">
      <div className="bg-white p-6 rounded-xl w-[400px] text-center shadow-lg relative">
        {/* X düyməsi */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          ✕
        </button>

        {/* Lottie animasiya */}
        <div className="w-48 h-48 mx-auto mb-4">
          <Lottie animationData={animationData} loop={true} />
        </div>

        <h2 className="text-xl font-bold mb-4">Diqqət!</h2>
        <p className="text-gray-700 mb-6">
          Bəzi fotolar indi əlçatan deyil. Sizi narahat etdiyimiz üçün üzr istəyirik. Tezliklə yeni fotolar əlavə ediləcək!
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Əla
        </button>
      </div>
    </div>,
    document.body
  );
}

export default index;
