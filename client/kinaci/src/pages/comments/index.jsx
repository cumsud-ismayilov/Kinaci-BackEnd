import BackGroundSec from "../../components/backgroundSec";
import PrintSec from "../../components/prinntSec";
import CommentsSec from "./commentsSec";
import SearchFilter from "../../components/searchFilter/searchFilter";
import BackImg from "../../assets/backSec.webp";
import ChoProperty from "../../components/choProperty";

function Comments() {
  return (
    <div>
      <div className="relative overflow-visible z-[1]">
        <BackGroundSec bgImage={BackImg} />
        <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-full max-w-5xl z-[50]">
          <SearchFilter />
        </div>
      </div>
      <CommentsSec />
      <PrintSec />
    </div>
  );
}

export default Comments;
