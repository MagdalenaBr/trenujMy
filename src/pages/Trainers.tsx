import Spinner from "../ui/Spinner";
import TrainersTable from "../features/trainer/TrainersTable";
import MainContainer from "../ui/MainContainer";
import AddTrainer from "../features/trainer/AddTrainer";
import { useTrainers } from "../features/trainer/useTrainers";
import TableNoContent from "../ui/TableNoContent";
import SearchNameProvider from "../context/SearchContext";
import SearchInput from "../ui/SearchInput";
import TrainersSortPanel from "../features/trainer/TrainersSortPanel";

function Trainers() {
  const { trainerIsLoading, error } = useTrainers();
  if (trainerIsLoading) return <Spinner />;
  if (error) return <TableNoContent />;

  return (
    <MainContainer title="Trenerzy">
      <SearchNameProvider>
        <div className="mb-4 flex content-center items-center justify-end gap-4 ">
          <SearchInput />
          <TrainersSortPanel
            dataName="category"
            mainSortCategory="kategoria: wszystko"
          />
          <TrainersSortPanel
            dataName="price"
            mainSortCategory="cena: domyślna"
          />
        </div>
        <TrainersTable />
      </SearchNameProvider>
      <AddTrainer />
    </MainContainer>
  );
}

export default Trainers;
