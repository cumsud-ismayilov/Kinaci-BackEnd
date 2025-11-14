import React from "react";
import { useNavigate } from "react-router";

function index({id, newsImg, newsMonth, newsDay, title1,title2,title3 }) {
    const navigate = useNavigate();

      const handleClick = () => {
    navigate(`/news/${id}`);  // detail səhifəsinə yönləndirəcək
  };
  return (
    <div className="bg-white shadow-md overflow-hidden cursor-pointer" onClick={handleClick}>
      {/* Şəkil */}
      <div className="relative">
        <img src={newsImg} className="w-full h-64 object-cover" />

        {/* Tarix qutusu */}
        <div className="absolute bottom-[-23px] right-4 bg-white px-[9px] py-[14px] rounded-xl shadow flex flex-col items-center gap-[10px]">
          <div className="text-sm text-gray-500">{newsMonth}</div>
          <div className="text-2xl font-bold leading-none">{newsDay}</div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-[13px]">{title1}</p>
        <h2 className="text-[16px] font-bold mt-1">{title2}</h2>
        <p className="text-gray-600 text-[13px] mt-1">{title3}</p>
      </div>
    </div>
  );
}

export default index;
