import BackGroundSec from "../../components/backgroundSec";
import SearchFilter from "../../components/searchFilter/searchFilter";
import PrintSec from "../../components/prinntSec";
import NewsCard from "../../components/newsCard";
import NewSec from "../blog/newsSection";
import { useEffect, useState } from "react";
import { getAllNews } from "../../services";
import Pagination from "../../components/pagination/pagination";

function Blog() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNews = news.filter((item) =>
    item.title2?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 4;

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedNews = filteredNews.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllNews();
        setNews(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="relative overflow-visible z-[1]">
        <BackGroundSec bgColor="#fdf2ee" />
        <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-full max-w-5xl z-[50]">
          <SearchFilter />
        </div>
      </div>

<div className="pt-[6rem] lg:pt-[2rem] px-[11px] lg:px-0">
  <div className="max-w-4xl mx-auto mb-[1rem]">
    <h1 className="font-semibold text-[25px]">Blog</h1>
  </div>

  <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(200px,3fr)_minmax(250px,1fr)] gap-6">
    <div className="flex flex-col gap-6 w-full lg:w-[590px]">
      {paginatedNews?.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </div>

    <div className="w-full lg:w-auto">
      <div className="shadow-[0_8px_24px_#959da533] p-[20px] mb-6 lg:mb-0">
        <input
          type="text"
          className="border border-[#dee2e6] outline-none text-[#212529] p-[6px_12px] text-[13px] w-full"
          placeholder="Nə axtarırsınız?"
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); 
          }}
        />
      </div>
      <div className="shadow-[0_8px_24px_#959da533] p-[20px]">
        <h4>Son Yazılar</h4>
        {news?.map((item) => (
          <NewSec key={item.id} {...item} />
        ))}
      </div>
    </div>
  </div>
</div>


      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />

      <PrintSec />
    </>
  );
}

export default Blog;
