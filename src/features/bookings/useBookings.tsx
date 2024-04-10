import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  const sortByStatusValue = {
    name: "status",
    value: searchParams.get("status"),
  };

  const sortByDateValue = { name: "date", value: searchParams.get("date") };

  const {
    data: bookings,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["bookings", sortByStatusValue, sortByDateValue],
    queryFn: () => getBookings(sortByDateValue, sortByStatusValue),
  });

  return { bookings, error, isLoading };
}
