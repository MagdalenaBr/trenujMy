import Spinner from "../ui/Spinner";
import TrainersTable from "../features/trainer/TrainersTable";
import MainContainer from "../ui/MainContainer";
import AddTrainer from "../features/trainer/AddTrainer";
import { useTrainers } from "../features/trainer/useTrainers";
import TableNoContent from "../ui/TableNoContent";
import SearchNameProvider from "../context/SearchContext";
import SearchInput from "../ui/SearchInput";
import TrainersSortCategory from "../features/trainer/TrainersSortCategory";

function Trainers() {
  const { trainerIsLoading, error } = useTrainers();
  if (trainerIsLoading) return <Spinner />;
  if (error) return <TableNoContent />;

  return (
    <MainContainer title="Trenerzy">
      <SearchNameProvider>
        <div className="mb-4 flex content-center items-center justify-end gap-4 ">
          <SearchInput />
          <TrainersSortCategory dataName='category'/>
          <TrainersSortCategory dataName='price'/>
        </div>
        <TrainersTable />
      </SearchNameProvider>
      <AddTrainer />
    </MainContainer>
  );
}

export default Trainers;
