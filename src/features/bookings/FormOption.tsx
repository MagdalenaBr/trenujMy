import { useBookings } from "./useBookings";

function FormOption({value}) {
	const { bookings } = useBookings();
	const values = value.split('.')

	return (
		<>
			{bookings?.map(booking => (
				<option value={booking[values[0]][values[1]]}>{booking[values[0]][values[1]]}</option>
			))}
		</>
	);
}

export default FormOption;
