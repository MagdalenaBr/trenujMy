import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";


export function useBooking(id: string, columnName: string) {
	const { data: booking, isLoading: bookingIsLoading} = useQuery({
		queryKey: ["bookings", id],
		queryFn: () =>getBooking(id, columnName),
	});
	
	return { booking, bookingIsLoading };
}
