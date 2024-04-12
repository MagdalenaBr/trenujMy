import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { NUM_OF_RESULTS } from "../utils/constants";

export default function Pagination({
  numOfData,
}: {
  numOfData: number | null;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage =
    Number(searchParams.get("page")) === 0
      ? 1
      : Number(searchParams.get("page"));
  if (!numOfData) return;
  const pageNum = Math.ceil(numOfData / NUM_OF_RESULTS);

  function nextPage() {
    const pageNumber = currentPage === pageNum ? currentPage : currentPage + 1;

    searchParams.set("page", String(pageNumber));
    setSearchParams(searchParams);
  }
  function prevPage() {
    const pageNumber =
      currentPage === 1 || null ? currentPage : currentPage - 1;
    searchParams.set("page", String(pageNumber));
    setSearchParams(searchParams);
  }

  return (
    <div className="flex justify-between px-2 py-1 text-accentColor2">
      <div>
        <span>{(currentPage - 1) * NUM_OF_RESULTS + 1}</span> -{" "}
        <span>
          {currentPage === pageNum ? numOfData : currentPage * NUM_OF_RESULTS}
        </span>{" "}
        z <span>{numOfData} wyników</span>
      </div>

      <div className="flex gap-9">
        <button
          className="flex
      items-center gap-1  text-sm uppercase hover:bg-accentColor2 hover:text-slate-800 pl-2 pr-4 py-1 rounded-md disabled:hover:bg-gray-600"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft />
          <span>Poprzednia</span>
        </button>
        <button
          className="flex
          items-center gap-1  text-sm uppercase hover:bg-accentColor2 hover:text-slate-800 pl-4 pr-2 py-1 rounded-md disabled:hover:bg-gray-600"
          onClick={nextPage}
          disabled={currentPage === pageNum}
        >
          <span>Następna</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}
