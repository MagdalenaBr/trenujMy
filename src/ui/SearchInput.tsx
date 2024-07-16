import { useContext } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { SearchNameContext } from "../context/SearchContext";

export default function SearchInput() {
  const searchNameContext = useContext(SearchNameContext);
  return (
    <div className="flex items-center justify-between">
      <div className="relative">
        <HiOutlineMagnifyingGlass className="absolute top-[25%] mx-2  text-xl text-accentColor2" />
        <input
          value={searchNameContext?.name}
          onChange={(e) => searchNameContext?.setName(e.target.value)}
          className=" w-60 border-2 border-accentColor2 bg-bgTableWithSpacing py-1  pl-8 pr-2 focus:border-slate-900  focus:shadow-slate-900 focus:shadow-md focus:outline-none xl:w-80"
        />
      </div>
    </div>
  );
}
