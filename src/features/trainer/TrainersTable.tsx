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
  const sortValue = { name: "category", value: searchParams.get("category") };

  const searchNameContext = useContext(SearchNameContext);
  //SEARCH TRAINER NAME
  let filteredTrainers = trainers?.filter((trainer) =>
    trainer.name
      .toLowerCase()
      .includes(searchNameContext?.name.toLocaleLowerCase())
      ? trainer
      : "",
  );

  if (sortValue.value === null) filteredTrainers;
  if (sortValue.value !== null)
    filteredTrainers = filteredTrainers?.filter(
      (trainer) => trainer.category === sortValue.value,
    );
  // if (sortValue.value === "trener personalny")
  //   filteredTrainers = filteredTrainers?.filter(
  //     (trainer) => trainer.category === "trener personalny",
  //   );
  // if (sortValue.value === "pole dance")
  //   filteredTrainers = filteredTrainers?.filter(
  //     (trainer) => trainer.category === "pole dance",
  //   );
  // if (sortValue.value === "pole dance")
  //   filteredTrainers = filteredTrainers?.filter(
  //     (trainer) => trainer.category === "pole dance",
  //   );

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
