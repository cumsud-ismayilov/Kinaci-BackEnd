import { useNavigate } from "react-router-dom";

function index({ id, newsImg, title2, newsMonth, newsDay, newsYear }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/news/${id}`);
  };

  return (
    <div className="mt-[10px]">
      <div
        className="flex gap-[10px] cursor-pointer items-center"
        onClick={handleClick}
      >
        <img
          src={newsImg}
          alt=""
          className="w-[70px] sm:w-[85px] h-[70px] sm:h-[85px] rounded-[15px] object-cover"
        />
        <div className="flex flex-col gap-[6px] sm:gap-[14px]">
          <p className="text-[#212529] text-[12px] sm:text-[13px]">{title2}</p>
          <p className="text-[#212529] text-[11px] sm:text-[13px]">
            {newsMonth} {newsDay} ,{newsYear}
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
