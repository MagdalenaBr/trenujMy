import Spinner from "../ui/Spinner";
import TrainersTable from "../features/trainer/TrainersTable";
import MainContainer from "../ui/MainContainer";
import AddTrainer from "../features/trainer/AddTrainer";
import { useTrainers } from "../features/trainer/useTrainers";
import TableNoContent from "../ui/TableNoContent";
import SearchNameProvider from "../context/SearchContext";
import SearchInput from "../ui/SearchInput";

function Trainers() {
  const { trainerIsLoading, error } = useTrainers();
  if (trainerIsLoading) return <Spinner />;
  if (error) return <TableNoContent />;

  return (
    <MainContainer title="Trenerzy">
      <SearchNameProvider>
        <SearchInput />
        <TrainersTable />
      </SearchNameProvider>
      <AddTrainer />
    </MainContainer>
  );
}

export default Trainers;
