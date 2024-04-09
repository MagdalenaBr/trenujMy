import { useTrainers } from "./useTrainers";
import { useSearchParams } from "react-router-dom";

export default function TrainersSortPanel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { trainers } = useTrainers();

  const trainerCategory = [
    ...new Set(trainers?.map((trainer) => trainer.category)),
  ];
// const [trainerCat] = useState
  const sortValue = searchParams.get("category") || "";

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "wszystko") {
      setSearchParams("");
    }
    if (e.target.value !== "wszystko") {
      searchParams.set("category", e.target.value);
      setSearchParams(searchParams);
    }
  }

  return (
    <select
      onChange={handleChange}
      value={sortValue}
      className="w-60 rounded-lg border-2 border-none bg-serchInputBg  px-2 py-1 focus:border-slate-300 focus:bg-slate-300 focus:text-slate-800 focus:shadow-md"
    >
      <option value="wszystko">kategoria: wszystko</option>
      {trainerCategory?.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
