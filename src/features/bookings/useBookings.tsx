import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {

	const [searchParams] = useSearchParams();
	const sortValue = { name: "status", value: searchParams.get("status") };
	const {
		data: bookings,
		error,
		isLoading,
	} = useQuery({
		queryKey: ["bookings", sortValue],
		queryFn: ()=>getBookings(sortValue),
	});

	return { bookings, error, isLoading };
}
