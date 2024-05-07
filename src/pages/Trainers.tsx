import Spinner from "../ui/Spinner";
import TrainersTable from "../features/trainer/TrainersTable";
import MainContainer from "../ui/MainContainer";
import AddTrainerModal from "../features/trainer/AddTrainerModal";
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
    <MainContainer title="Trenerzy" buttons={<AddTrainerModal />}>
      <SearchNameProvider>
        <div className="flex content-center items-center  gap-4 ">
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
      {/* <AddTrainerModal /> */}
    </MainContainer>
  );
}

export default Trainers;
