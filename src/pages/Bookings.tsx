import BookingsTable from "../features/bookings/BookingsTable";
import MainContainer from "../ui/MainContainer";

function Bookings() {
	return (
		<MainContainer title='Rezerwacje'>
			<BookingsTable />
		</MainContainer>
	);
}

export default Bookings;
