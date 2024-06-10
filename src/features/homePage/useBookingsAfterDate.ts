import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookingsAfterDate() {
  const [searchParams] = useSearchParams();
  const selectedTimeRange = !searchParams.get("zakres")
    ? "7"
    : searchParams.get("zakres");
  const { data: bookingsAfterDate, isLoading } = useQuery({
    queryKey: ["bookings", selectedTimeRange],
    queryFn: () => getBookingsAfterDate(selectedTimeRange),
  });

  return { bookingsAfterDate, isLoading };
}
