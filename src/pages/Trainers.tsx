import Spinner from "../ui/Spinner";
import TrainersTable from "../features/trainer/TrainersTable";
import MainContainer from "../ui/MainContainer";
import AddTrainerModal from "../features/trainer/AddTrainerModal";
import { useTrainers } from "../features/trainer/useTrainers";
import TableNoContent from "../ui/TableNoContent";
import SearchNameProvider from "../context/SearchContext";
import SearchInput from "../ui/SearchInput";
import TrainersSortPanel from "../features/trainer/TrainersSortPanel";
import SearchAndFiltterContainer from "../ui/SearchAndFilterContainer";

function Trainers() {
  const { trainerIsLoading, error } = useTrainers();
  if (trainerIsLoading) return <Spinner />;
  if (error) return <TableNoContent />;

  return (
    <MainContainer title="Trenerzy" buttons={<AddTrainerModal />}>
      <SearchNameProvider>
        <div>
          <SearchAndFiltterContainer>
            <SearchInput />
            <TrainersSortPanel
              dataName="category"
              mainSortCategory="kategoria: wszystko"
            />
            <TrainersSortPanel
              dataName="price"
              mainSortCategory="cena: domyślna"
            />
          </SearchAndFiltterContainer>
          <TrainersTable />
        </div>
      </SearchNameProvider>
    </MainContainer>
  );
}

export default Trainers;
