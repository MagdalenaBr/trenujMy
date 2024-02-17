import BookingsTable from "../features/bookings/BookingsTable";
import { useBookings } from "../features/bookings/useBookings";
import MainContainer from "../ui/MainContainer";
import Spinner from "../ui/Spinner";
import TableNoContent from "../ui/TableNoContent";
import StyledButton from "../ui/StyledButton";

import AddBookingModal from "../features/bookings/AddBookingModal";

function Bookings() {
	const { isLoading, error } = useBookings();
	if (isLoading) return <Spinner />;
	if (error) return <TableNoContent />;
	return (
		<MainContainer title='Rezerwacje'>
			<BookingsTable />
			<AddBookingModal>
				<StyledButton styleType='add'>Dodaj rezerwację</StyledButton>
			</AddBookingModal>
		</MainContainer>
	);
}

export default Bookings;
