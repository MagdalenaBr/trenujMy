import TrainersTable from "../features/trainer/TrainersTable";
import AddTrainerModal from "../features/trainer/AddTrainerModal";
import TrainersSortPanel from "../features/trainer/TrainersSortPanel";
import SearchNameProvider from "../context/SearchContext";
import MainContainer from "../ui/MainContainer";
import SearchInput from "../ui/SearchInput";
import SearchAndFiltterContainer from "../ui/SearchAndFilterContainer";

function Trainers() {
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
