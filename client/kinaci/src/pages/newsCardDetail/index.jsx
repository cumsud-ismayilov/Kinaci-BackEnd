import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getNewsById } from "../../services";
import UserIcon from "../../icons/userIcon";
import { User } from "lucide-react";
import BackGroundSec from "../../components/backgroundSec";
import SearchFilter from "../../components/searchFilter/searchFilter";
import PrintSec from "../../components/prinntSec";

function NewsDetail() {
  const { id } = useParams();
  const [singlePro, setSinglePro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [user, setUser] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getNewsById(id);
        setSinglePro(data);
      } catch (err) {
        setError(err.message || "Xəbəri gətirərkən xəta baş verdi");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`${API_URL}/comments/news/${id}`);
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.log("Şərhləri gətirmək mümkün olmadı:", err);
      }
    };
    fetchComments();
  }, [id]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.warning("Şərh yazmaq üçün əvvəlcə daxil olun!");
      return;
    }

    if (!commentText.trim()) {
      toast.error("Şərhinizi daxil edin!");
      return;
    }

    const newComment = {
      newsId: id,
      name: user.name,
      email: user.email,
      text: commentText,
    };

    try {
      const res = await fetch(`${API_URL}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });

      const savedComment = await res.json();
      setComments((prev) => [...prev, savedComment]);
      setCommentText("");
    } catch (err) {
      console.log("Şərh göndərilə bilmədi:", err);
      toast.error("Şərh göndərilə bilmədi");
    }
  };

  if (loading) return <p className="p-6">Yüklənir...</p>;
  if (error) return <p className="p-6 text-red-500">Xəta: {error}</p>;
  if (!singlePro) return <p className="p-6">Xəbər tapılmadı</p>;

  return (
    <>
      <div className="relative overflow-visible z-[1]">
        <BackGroundSec bgColor="#fdf2ee" />
        <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-full max-w-5xl z-[50]">
          <SearchFilter />
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-10 px-4 sm:px-0 mt-12 sm:mt-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          {singlePro.title2}
        </h1>

        <p className="text-[13px] flex flex-col sm:flex-row sm:items-center gap-[6px] sm:gap-[8px]">
          <span className="flex items-center gap-1">
            <UserIcon /> Yönetici
          </span>
          <span>Lüks Ev Villa</span>
          <span>
            {singlePro.newsMonth} {singlePro.newsDay} , {singlePro.newsYear}{" "}
            {singlePro.newsTime}
          </span>
        </p>

        <div className="my-7 sm:my-[28px]">
          <img
            src={singlePro.newsImg}
            alt={singlePro.title2}
            className="w-full sm:w-[422px] h-56 sm:h-[388px] object-cover shadow mx-auto block"
          />
        </div>

        <p className="text-[14px] sm:text-[15px] text-[#052841] mt-4">
          {singlePro.content}
        </p>

        <div className="my-5 py-6 sm:py-10 border-t border-b border-[#ececec] flex flex-wrap justify-center gap-2 sm:gap-[10px]">
          <span className="p-2.5 bg-[#fef4f3] rounded-[30px]">Kiralık</span>
          <span className="p-2.5 bg-[#fef4f3] rounded-[30px]">Ev</span>
          <span className="p-2.5 bg-[#fef4f3] rounded-[30px]">Villa</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-[10px] mb-6">
          <User className="w-5 h-5 sm:w-6 sm:h-6" />
          <div className="text-[13px] sm:text-[14px]">
            <p className="font-semibold">Yönetici</p>
            <p>{singlePro.title3}</p>
          </div>
        </div>

        <div className="my-5 py-6 sm:py-10 border-t border-b border-[#ececec]">
          {comments.length === 0 ? (
            <p className="font-semibold text-center">Hələ şərh yoxdur</p>
          ) : (
            comments.map((c) => (
              <div key={c._id} className="mb-3 border-b border-gray-200 pb-2">
                <p className="font-bold">{c.name}</p>
                <p className="text-gray-600 text-sm">{c.text}</p>
              </div>
            ))
          )}
        </div>

        <div>
          <h6 className="text-[14px] sm:text-[16px] mb-2">Şərh yazın</h6>
          <form onSubmit={handleSubmit} className="pt-[10px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[13px] sm:text-[14px] pb-[5px]"
                >
                  Ad
                </label>
                <input
                  type="text"
                  value={user?.name || ""}
                  readOnly
                  className="p-2 sm:p-[6px_12px] w-full text-[#212529] border border-[#dee2e6] rounded-[6px] bg-gray-100 cursor-not-allowed"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[13px] sm:text-[14px] pb-[5px]"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="p-2 sm:p-[6px_12px] w-full text-[#212529] border border-[#dee2e6] rounded-[6px] bg-gray-100 cursor-not-allowed"
                />
              </div>
            </div>

            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              rows="4"
              placeholder={
                user
                  ? "Şərhinizi yazın..."
                  : "Şərh yazmaq üçün əvvəlcə daxil olun"
              }
              className={`w-full border border-[#dee2e6] p-2 sm:p-[6px_12px] mt-4 mb-6 rounded-[6px] ${
                !user ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
              readOnly={!user}
            ></textarea>

            <button
              type="submit"
              className="mb-6 bg-[#2582c1] text-[#fff] rounded-[6px] text-[14px] p-2 sm:p-[6px_12px] w-full sm:w-auto hover:bg-[#1f6aa0] transition"
            >
              Şərh göndərin
            </button>
          </form>
        </div>
      </div>

      <PrintSec />
    </>
  );
}

export default NewsDetail;
