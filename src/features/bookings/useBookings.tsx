import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  const currentPage = Number(!searchParams.get("page")) 
  ? 1
  : Number(searchParams.get("page"))

  const sortByStatusValue = {
    name: "status",
    value: searchParams.get("status"),
  };

  const sortByDateValue = { name: "date", value: searchParams.get("date") };

  const {
    data: {data: bookings, count} ={},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["bookings", sortByStatusValue, sortByDateValue, currentPage],
    queryFn: () => getBookings(sortByDateValue, sortByStatusValue, currentPage),
  });

  return { bookings, error, isLoading, count};
}
