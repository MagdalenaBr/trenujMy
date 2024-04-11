import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

const NUM_OF_RESULTS = 10;
export default function Pagination({ numOfData }: {numOfData: number}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) === 0
      ? 1
      : Number(searchParams.get("page")),
  );
  const lastPage = Math.ceil(numOfData / NUM_OF_RESULTS);

  function nextPage() {
    const pageNumber = currentPage + 1;
    setCurrentPage(pageNumber);
    searchParams.set("page", String(pageNumber));
    setSearchParams(searchParams);
  }
  function prevPage() {
    const pageNumber =
      currentPage === 1 || null ? currentPage : currentPage - 1;
    setCurrentPage(pageNumber);
    searchParams.set("page", String(pageNumber));
    setSearchParams(searchParams);
  }

  return (
    <div className="flex justify-between px-2 py-1 text-accentColor2">
      <div>
        <span>{(currentPage - 1) * NUM_OF_RESULTS + 1}</span> -{" "}
        <span>
          {currentPage === lastPage ? numOfData : currentPage * NUM_OF_RESULTS}
        </span>{" "}
        z <span>{numOfData} wyników</span>
      </div>

      <div className="flex gap-9">
        <button
          className="flex
      items-center gap-1  text-sm uppercase"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft />
          <span>Poprzednia</span>
        </button>
        <button
          className="flex items-center gap-1  text-sm uppercase"
          onClick={nextPage}
          disabled={currentPage === lastPage}
        >
          <span>Następna</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}
