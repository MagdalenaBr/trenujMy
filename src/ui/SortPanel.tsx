import { useSearchParams } from "react-router-dom";

export default function SortPanel({
  searchCategories,
  dataName,
  mainSortCategory,
}: {
  searchCategories: string[];
  dataName: string;
  mainSortCategory: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortValue = searchParams.get(dataName) as string;

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "wszystko") {
      searchParams.delete(dataName);
      setSearchParams(searchParams);
    }
    if (e.target.value !== "wszystko") {
      searchParams.set(dataName, e.target.value);
      setSearchParams(searchParams);
    }
  }

  return (
    <select
      onChange={handleChange}
      value={sortValue}
      className="w-60 rounded-lg border-2 border-none bg-serchInputBg  px-2 py-1 focus:border-slate-300 focus:bg-slate-300 focus:text-slate-800 focus:shadow-md"
    >
      <option value="wszystko">{mainSortCategory}</option>
      {searchCategories?.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
