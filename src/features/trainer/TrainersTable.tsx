import TableNoContent from "../../ui/TableNoContent";
import Table from "../../ui/Table";
import { useTrainers } from "./useTrainers";
import TrainerRow from "./TrainerRow";
import { useContext } from "react";
import { SearchNameContext } from "../../context/SearchContext";

function TrainersTable() {
  const { trainers } = useTrainers();
  const searchNameContext = useContext(SearchNameContext);
  const filteredTrainers = trainers?.filter((trainer) =>
    trainer.name
      .toLowerCase()
      .includes(searchNameContext?.name.toLocaleLowerCase())
      ? trainer
      : "",
  );
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
