import SortPanel from "../../ui/SortPanel";
import { useTrainers } from "./useTrainers";

export default function TrainersSortPanel({
  dataName,
  mainSortCategory,
}: {
  dataName: string;
  mainSortCategory: string;
}) {
  const { trainers } = useTrainers();
  let searchCategories;
  if (dataName === "category")
    searchCategories = [
      ...new Set(trainers?.map((trainer) => trainer.category)),
    ];

  if (dataName === "price")
    searchCategories = ["ceny rosnąco", "ceny malejąco"];

  return (
    <SortPanel
      searchCategories={searchCategories as string[]}
      dataName={dataName}
      mainSortCategory={mainSortCategory}
    />
  );
}
