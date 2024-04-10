import SearchNameProvider from "../context/SearchContext";
import BookingsTable from "../features/bookings/BookingsTable";
import BookingsSortPanel from "../features/members/BookingsSortPanel";
import MainContainer from "../ui/MainContainer";
import SearchInput from "../ui/SearchInput";

function Bookings() {
  return (
    <MainContainer title="Rezerwacje">
      <SearchNameProvider>
        <SearchInput />
        <BookingsSortPanel
          dataName="status"
          mainSortCategory="status: wszystko"
        />
        <BookingsSortPanel
          dataName="date"
          mainSortCategory="data: malejąco"
        />
        <BookingsTable />
      </SearchNameProvider>
    </MainContainer>
  );
}

export default Bookings;
