import SearchNameProvider from "../context/SearchContext";
import BookingsTable from "../features/bookings/BookingsTable";
import BookingsSortPanel from "../features/bookings/BookingsSortPanel";
import MainContainer from "../ui/MainContainer";
import SearchInput from "../ui/SearchInput";
import SearchAndFiltterContainer from "../ui/SearchAndFilterContainer";

function Bookings() {
  return (
    <MainContainer title="Rezerwacje">
      <SearchNameProvider>
        <div>
          <SearchAndFiltterContainer>
            <SearchInput />
            <BookingsSortPanel
              dataName="status"
              mainSortCategory="status: wszystko"
            />
            <BookingsSortPanel
              dataName="date"
              mainSortCategory="data: malejąco"
            />
          </SearchAndFiltterContainer>
          <BookingsTable />
        </div>
      </SearchNameProvider>
    </MainContainer>
  );
}

export default Bookings;
