import { useTrainers } from "./useTrainers";
import SortPanel from "../../ui/SortPanel";

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

  let searchCategories;
  if (dataName === "category")
    searchCategories = trainersCotagories.map((category) => {
      return {
        name: "kategoria",
        value: category.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
        label: category,
      };
    });

  if (dataName === "price")
    searchCategories = [
      {
        name: "cena",
        value: "rosnaco",
        label: "rosnąco",
      },
      {
        name: "cena",
        value: "malejaco",
        label: "malejąco",
      },
    ];

  return (
    <SortPanel
      searchCategories={
        searchCategories as {
          name: string;
          value: string;
          label: string;
        }[]
      }
      dataName={dataName}
      mainSortCategory={mainSortCategory}
    />
  );
}
