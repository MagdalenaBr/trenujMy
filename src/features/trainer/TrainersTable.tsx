import TableNoContent from "../../ui/TableNoContent";
import Table from "../../ui/Table";
import { useTrainers } from "./useTrainers";
import TrainerRow from "./TrainerRow";
import { useContext } from "react";
import { SearchNameContext } from "../../context/SearchContext";
import { useSearchParams } from "react-router-dom";

function TrainersTable() {
  const { trainers } = useTrainers();

  const [searchParams] = useSearchParams();
  const sortValueCategory = {
    name: "category",
    value: searchParams.get("category"),
  };
  const sortValuePrice = { name: "price", value: searchParams.get("price") };
  const searchNameContext = useContext(SearchNameContext);
  
  //SEARCH TRAINER NAME
  let filteredTrainers = trainers?.filter((trainer) =>
    trainer.name
      .toLowerCase()
      .includes(searchNameContext?.name.toLocaleLowerCase())
      ? trainer
      : "",
  );

  // SORT CATEGORY
  if (sortValueCategory.value === null) filteredTrainers;
  if (sortValueCategory.name === "category" && sortValueCategory.value !== null)
    filteredTrainers = filteredTrainers?.filter(
      (trainer) => trainer.category === sortValueCategory.value,
    );

  // SORT PRICE
  if (sortValuePrice.value === "ceny rosnąco" && sortValuePrice.value !== null)
    filteredTrainers = filteredTrainers?.sort((a, b) => a.price - b.price);
  if (sortValuePrice.value === "ceny malejąco" && sortValuePrice.value !== null)
    filteredTrainers = filteredTrainers?.sort((a, b) => b.price - a.price);

  return (
    <Table columns="grid-cols-5">
      {filteredTrainers ? (
        filteredTrainers.map((trainer) => (
          <Table.Row key={trainer.id}>
            <TrainerRow trainer={trainer} />
          </Table.Row>
        ))
      ) : (
        <TableNoContent />
      )}
    </Table>
  );
}

export default TrainersTable;
