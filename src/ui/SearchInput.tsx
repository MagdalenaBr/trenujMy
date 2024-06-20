import { useContext } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { SearchNameContext } from "../context/SearchContext";

export default function SearchInput() {
  const searchNameContext = useContext(SearchNameContext);
  return (
    <div className="flex items-center justify-between">
      <div className="relative focus:text-slate-700">
        <HiOutlineMagnifyingGlass className="absolute top-[25%] mx-2  text-xl text-accentColor2" />
        <input
          value={searchNameContext?.name}
          onChange={(e) => searchNameContext?.setName(e.target.value)}
          className="w-80 border-2 border-violet-300 bg-serchInputBg  py-1 pl-8 pr-2 focus:border-slate-300 focus:bg-slate-300 focus:text-slate-800 focus:shadow-md focus:outline-none"
        />
      </div>
    </div>
  );
}
