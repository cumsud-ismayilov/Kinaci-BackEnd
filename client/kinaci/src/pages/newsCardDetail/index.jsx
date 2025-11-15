import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getNewsById } from "../../services";
import UserIcon from "../../icons/userIcon";
import { User } from "lucide-react";
import BackGroundSec from "../../components/backgroundSec";
import SearchFilter from "../../components/searchFilter/searchFilter";
import PrintSec from "../../components/prinntSec";

function NewsDetail() {
  const { id } = useParams();

  // ✅ Hook-lar hər zaman top-level-də
  const [singlePro, setSinglePro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");

  // Xəbəri gətir
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

  // Şərhləri gətir
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`http://localhost:5000/comments/news/${id}`);
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.log("Şərhləri gətirmək mümkün olmadı:", err);
      }
    };
    fetchComments();
  }, [id]);

  // Şərh göndərmə
const handleSubmit = async (e) => {
  e.preventDefault();

  const newComment = { newsId: id, name, email, text: commentText };

  try {
    const res = await fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });

    const savedComment = await res.json(); // server-dən gələn comment

    // Lokal state-i dərhal yenilə
    setComments((prev) => [...prev, savedComment]);

    setName("");
    setEmail("");
    setCommentText("");
  } catch (err) {
    console.log("Şərh göndərilə bilmədi:", err);
  }
};


  // Render hissəsi
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
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-2">{singlePro.title2}</h1>
        <p className="text-[13px] flex items-center gap-[8px]">
          <UserIcon /> Yönetici |<span>Lüks Ev Villa</span>
          <span>
            {singlePro.newsMonth} {singlePro.newsDay},{singlePro.newsYear}{" "}
            {singlePro.newsTime}
          </span>
        </p>
        <div className="m-[28px]">
          <img
            src={singlePro.newsImg}
            alt={singlePro.title2}
            className="w-[422px] h-[388px] object-cover shadow mx-auto block"
          />
        </div>

        <p className="text-[15px] text-[#052841] mt-4">{singlePro.content}</p>

        <div className="my-5 py-10 border-t border-b border-[#ececec] flex justify-center gap-[10px]">
          <span className="p-2.5 bg-[#fef4f3] rounded-[30px]">Kiralık</span>
          <span className="p-2.5 bg-[#fef4f3] rounded-[30px]">Ev</span>
          <span className="p-2.5 bg-[#fef4f3] rounded-[30px]">Villa</span>
        </div>

        <div className="flex items-center gap-[10px]">
          <User />
          <div className="text-[14px]">
            <p className="font-semibold">Yönetici</p>
            <p>{singlePro.title3}</p>
          </div>
        </div>

        {/* Şərhlər */}
        <div className="my-5 py-10 border-t border-b border-[#ececec]">
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

        {/* Şərh formu */}
        <div>
          <h6>Şərh yazın</h6>
          <form onSubmit={handleSubmit} className="pt-[11px]">
            <div className="grid grid-cols-2 gap-[10px]">
              <div>
                <label htmlFor="name" className="block text-[14px] pb-[5px]">
                  Ad
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ad daxil edin"
                  className="p-[6px_12px] w-full text-[#212529] border border-[#dee2e6] rounded-[6px]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[14px] pb-[5px]">
                  E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail daxil edin"
                  className="p-[6px_12px] w-full text-[#212529] border border-[#dee2e6] rounded-[6px]"
                  required
                />
              </div>
            </div>

            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              rows="5"
              placeholder="Şərhinizi yazın..."
              className="w-full border border-[#dee2e6] p-[6px_12px] mt-[24px] mb-[24px] rounded-[6px]"
              required
            ></textarea>

            <button
              type="submit"
              className="mb-[24px] bg-[#2582c1] text-[#fff] rounded-[6px] text-[14px] p-[6px_12px] cursor-pointer"
            >
              Şərh göndərin
            </button>
          </form>
        </div>
      </div>
      <PrintSec/>
    </>
  );
}

export default NewsDetail;
