import { useQuery } from "@tanstack/react-query";
import { getMemberBookings } from "../../services/apiBookings";

export function useMemberBookings(id) {
	const { data: memberBookings, isLoading: memberBookingsIsLoading } = useQuery(
		{
			queryKey: ["bookings"],
			queryFn: () => getMemberBookings(id),
		}
	);
	return { memberBookings, memberBookingsIsLoading };
}
