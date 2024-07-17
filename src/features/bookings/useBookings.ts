import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";
import { NUM_OF_RESULTS } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const currentPage = Number(!searchParams.get("page"))
    ? 1
    : Number(searchParams.get("page"));

  const sortByStatusValue = {
    name: "status",
    value: searchParams.get("status"),
  };

  const sortByDateValue = { name: "date", value: searchParams.get("date") };

  const {
    data: { data: bookings, count } = {},
    isLoading,
  } = useQuery({
    queryKey: ["bookings", sortByStatusValue, sortByDateValue, currentPage],
    queryFn: () => getBookings(sortByDateValue, sortByStatusValue, currentPage),
  });

const numOfPages = Math.ceil(count as number / NUM_OF_RESULTS)

// PREFFETCH NEXT PAGE
if(currentPage < numOfPages)
  queryClient.prefetchQuery({
    queryKey: ["bookings", sortByStatusValue, sortByDateValue, currentPage+ 1],
    queryFn: () => getBookings(sortByDateValue, sortByStatusValue, currentPage +1),
  });

// PREFETCH PREV PAGE
if(currentPage > 1)
  queryClient.prefetchQuery({
    queryKey: ["bookings", sortByStatusValue, sortByDateValue, currentPage- 1],
    queryFn: () => getBookings(sortByDateValue, sortByStatusValue, currentPage -1),
  });

  return { bookings, isLoading, count };
}
