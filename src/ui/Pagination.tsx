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
  const buttons = [
    {
      name: "poprzednia",
      icon: <HiChevronLeft />,
      disabled: currentPage === 1,
      action: prevPage,
    },
    {
      name: "następna",
      icon: <HiChevronRight />,
      disabled: currentPage === pageNum,
      action: nextPage,
    },
  ];

  return (
    <div className="flex w-[37rem] justify-between px-2 py-1 font-semibold text-iconsColor lg:w-auto">
      <div>
        <span>{(currentPage - 1) * NUM_OF_RESULTS + 1}</span> -{" "}
        <span>
          {currentPage === pageNum ? numOfData : currentPage * NUM_OF_RESULTS}
        </span>{" "}
        z <span>{numOfData} wyników</span>
      </div>

      <div className="flex gap-9">
        {buttons.map((button) => (
          <button
            className="flex
      items-center gap-1  py-1 pl-2 pr-4 text-sm uppercase hover:border-iconsColor hover:text-textLightMode disabled:hover:border-gray-600 border-2 border-transparent"
            onClick={button.action}
            disabled={button.disabled}
          >
            {button.name === "poprzednia" && button.icon}
            <span>{button.name}</span>
            {button.name === "następna" && button.icon}
          </button>
        ))}
       
      </div>
    </div>
  );
}
