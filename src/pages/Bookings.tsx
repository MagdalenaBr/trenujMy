import SearchNameProvider from "../context/SearchContext";
import BookingsTable from "../features/bookings/BookingsTable";
import BookingsSortPanel from "../features/bookings/BookingsSortPanel";
import MainContainer from "../ui/MainContainer";
import SearchInput from "../ui/SearchInput";

function Bookings() {
  return (
    <MainContainer title="Rezerwacje">
      <SearchNameProvider>
        <div>
          <div className="mb-5 flex content-center items-center justify-end gap-4 ">
            <SearchInput />
            <BookingsSortPanel
              dataName="status"
              mainSortCategory="status: wszystko"
            />
            <BookingsSortPanel
              dataName="date"
              mainSortCategory="data: malejąco"
            />
          </div>
          <BookingsTable />
        </div>
      </SearchNameProvider>
    </MainContainer>
  );
}

export default Bookings;
