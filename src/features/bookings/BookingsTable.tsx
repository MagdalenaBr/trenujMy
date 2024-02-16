import { BsBookmark } from "react-icons/bs";
import Table from "../../ui/Table";
import { useBookings } from "./useBookings";
import TableNoContent from "../../ui/TableNoContent";
import BookingStatus from "./BookingStatus";
import { HiOutlinePencil } from "react-icons/hi2";

function BookingsTable() {
	const { bookings } = useBookings();
	console.log(bookings[1].date.split("T"));
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
							<HiOutlinePencil className='text-2xl text-slate-800' />
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
