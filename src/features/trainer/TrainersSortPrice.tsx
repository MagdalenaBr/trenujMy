import { useSearchParams } from "react-router-dom";
import { useTrainers } from "./useTrainers";

function TrainersSortPrice() {

    const [searchParams, setSearchParams] = useSearchParams();
    const { trainers } = useTrainers();

    const trainerCategory = [
        ...new Set(trainers?.map((trainer) => trainer.price)),
      ];



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
