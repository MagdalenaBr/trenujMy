import { HiOutlinePencil } from "react-icons/hi2";
import { useBookings } from "./useBookings";
import AddBookingModal from "./AddBookingModal";
import BookingStatus from "./BookingStatus";
import Table from "../../ui/Table";
import TableNoContent from "../../ui/TableNoContent";
import Button from "../../ui/Button";

function BookingsTable() {
	const { bookings } = useBookings();

	return (
		<Table>
			<Table.Header>
				<p>Klient</p>
				<p>Trener</p>
				<p>Data</p>
				<p>Status</p>
			</Table.Header>
			{bookings ? (
				bookings.map(booking => (
					<Table.Row key={booking.id}>
						<div>
							<h2 className='font-semibold'>{booking.members.name}</h2>
							<p className='text-slate-600 text-sm'>{booking.members.phone}</p>
						</div>
						<p>{booking.trainers.name}</p>
						<div>
							<p>{booking.date.split("T")[0]}</p>
							<p className='text-slate-600 text-sm'>
								{booking.date.split("T")[1]}
							</p>
						</div>
						<div className='flex w-full justify-between'>
							<BookingStatus status={booking.status} />
							<AddBookingModal booking={booking}>
								<Button>
									<HiOutlinePencil className='text-2xl' />
								</Button>
							</AddBookingModal>
						</div>
					</Table.Row>
				))
			) : (
				<TableNoContent />
			)}
		</Table>
	);
}

export default BookingsTable;
