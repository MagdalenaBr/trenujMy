import { useSearchParams } from "react-router-dom";

export default function FilterPanel() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchCategories = [
    { name: "zakres", value: "7", label: "7 dni" },
    { name: "zakres", value: "30", label: "30 dni" },
    { name: "zakres", value: "90", label: "90 dni" },
    { name: "zakres", value: "rok", label: "rok" },
  ];

  function handleClick(name: string, value: string) {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  }
// return 7 if there is no filter chosen
  const valueFromParams = searchParams.get("zakres") || '7'

  return (
    <div className="flex  w-80  gap-3  justify-self-end rounded-md bg-slate-300 px-1">
      {searchCategories.map((category) => (
        <button key={category.value}
          onClick={() => handleClick(category.name, category.value)}
          className={`w-20 rounded-lg py-1 text-sm  font-semibold uppercase tracking-widest  shadow-lg hover:scale-105 hover:bg-slate-900 hover:text-slate-300 ${valueFromParams === category.value ? "bg-slate-900 text-slate-300" : "text-slate-900"}`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
