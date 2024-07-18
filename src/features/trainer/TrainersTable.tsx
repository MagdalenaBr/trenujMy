import { useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { useTrainers } from "./useTrainers";
import { SearchNameContext } from "../../context/SearchContext";
import TrainerRow from "./TrainerRow";
import TableNoContent from "../../ui/TableNoContent";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";

function TrainersTable() {
  const { trainers, trainerIsLoading } = useTrainers();
  const [searchParams] = useSearchParams();
  const searchNameContext = useContext(SearchNameContext);

  const sortValueCategory = {
    name: "category",
    value: searchParams.get("category"),
  };
  const sortValuePrice = { name: "price", value: searchParams.get("price") };

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
      (trainer) =>
        trainer.category.normalize("NFD").replace(/[\u0300-\u036f]/g, "") ===
        sortValueCategory.value,
    );

  // SORT PRICE
  if (sortValuePrice.value === "rosnaco" && sortValuePrice.value !== null)
    filteredTrainers = filteredTrainers?.sort((a, b) => a.price - b.price);
  if (sortValuePrice.value === "malejaco" && sortValuePrice.value !== null)
    filteredTrainers = filteredTrainers?.sort((a, b) => b.price - a.price);

  if (trainerIsLoading) return <Spinner />;
  if (!filteredTrainers?.length)
    return <TableNoContent>Brak danych dotyczących trenerów.</TableNoContent>;
  return (
    <Table
      uniqueStyles="w-[38rem] md:w-auto"
      columns="xl:grid-cols-5"
      smColumns={"grid-cols-[200px_100px_100px_50px_100px]"}
    >
      {filteredTrainers?.map((trainer) => (
        <Table.Row key={trainer.id}>
          <TrainerRow trainer={trainer} />
        </Table.Row>
      ))}
    </Table>
  );
}

export default TrainersTable;
