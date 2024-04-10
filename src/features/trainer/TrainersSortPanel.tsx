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

  const trainersCotagories = [
    ...new Set(trainers?.map((trainer) => trainer.category)),
  ];

  // { name: "status", value: "anulowana" },
  // { name: "status", value: "niepotwierdzona" },
  // { name: "status", value: "zrealizowana" },

  let searchCategories;
  if (dataName === "category")
    searchCategories = trainersCotagories.map((category) => {
      return { name: "kategoria", value: category };
    });

  if (dataName === "price")
    searchCategories =[ { name: "cena", value: "rosnąco" },
  { name: "cena", value: "malejąco" },]


  return (
    <SortPanel
      searchCategories={
        searchCategories as {
          name: string;
          value: string;
        }[]
      }
      dataName={dataName}
      mainSortCategory={mainSortCategory}
    />
  );
}
