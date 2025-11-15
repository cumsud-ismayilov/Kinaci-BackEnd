import { useNavigate } from "react-router-dom";

function index({ id, newsImg, title2, newsMonth, newsDay, newsYear }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/news/${id}`);
  };
  return (
    <div>
      <div className="mt-[10px]">
        <div className="flex gap-[10px] cursor-pointer" onClick={handleClick}>
          <img
            src={newsImg}
            alt=""
            className="w-[85px] h-[85px] rounded-[15px]"
          />
          <div className="flex flex-col gap-[14px]">
            <p className="text-[#212529] text-[13px]">{title2}</p>
            <p className="text-[#212529] text-[13px]">
              {newsMonth} {newsDay} ,{newsYear}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
