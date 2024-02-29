import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";


export function useBooking(id: number) {
	const { data: booking, isLoading: bookingIsLoading} = useQuery({
		queryKey: ["bookings", id],
		queryFn: () =>getBooking(id),
	});
	
	return { booking, bookingIsLoading };
}
