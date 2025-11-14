import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getNewsById } from "../../services";

function NewsDetail() {
  const { id } = useParams();

  const [singlePro, setSinglePro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p className="p-6">Yüklənir...</p>;
  if (error) return <p className="p-6 text-red-500">Xəta: {error}</p>;
  if (!singlePro) return <p className="p-6">Xəbər tapılmadı</p>;

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{singlePro.title2}</h1>

      <img
        src={singlePro.newsImg}
        alt={singlePro.title2}
        className="w-full h-80 object-cover rounded-xl shadow"
      />

      <p className="text-gray-500 mt-4">{singlePro.title1}</p>
      <p className="text-[15px] text-gray-700 mt-3 leading-7">
        {singlePro.title3}
      </p>
    </div>
  );
}

export default NewsDetail;
