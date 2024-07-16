import { useSearchParams } from "react-router-dom";

export default function SortPanel({
  searchCategories,
  dataName,
  mainSortCategory,
}: {
  searchCategories: {
    name: string;
    value: string;
    label: string;
  }[];
  dataName: string;
  mainSortCategory: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortValue = searchParams.get(dataName);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (dataName === "status") {
      searchParams.set("page", "1");
      setSearchParams(searchParams);
    }
    if (e.target.value === "domyślne") {
      searchParams.delete(dataName);
      setSearchParams(searchParams);
    }
    if (e.target.value !== "domyślne") {
      searchParams.set(dataName, e.target.value);
      setSearchParams(searchParams);
    }
  }

  return (
    <select
      onChange={handleChange}
      value={sortValue || ""}
      className="w-60 border-2 border-accentColor2 bg-bgTableWithSpacing px-2 py-1  text-[12px] focus:border-slate-900  focus:shadow-md focus:shadow-slate-900 lg:text-sm focus:outline-none"
    >
      <option value="domyślne">{mainSortCategory}</option>
      {searchCategories?.map((el) => (
        <option value={el.value} key={el.value}>
          {`${el.name}: ${el.label}`}
        </option>
      ))}
    </select>
  );
}
