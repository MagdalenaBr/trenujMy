import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useBookingsAfterDate() {
  const [searchParams] = useSearchParams();
  const selectedTimeRange = !searchParams.get("zakres")
    ? "7"
    : searchParams.get("zakres");
  const { data: bookingsAfterDate, isLoading } = useQuery({
    queryKey: ["bookings", selectedTimeRange],
    queryFn: () => getBookingsAfterDate(selectedTimeRange),
  });

  const personalTrainerBookings = bookingsAfterDate?.filter(booking=> booking.trainers.category === 'trener personalny' && booking.status === 'zrealizowana')

  const groupActivitiesBookings = bookingsAfterDate?.filter(booking => booking.trainers.category !== 'trener personalny' && booking.status === 'zrealizowana')


  return { bookingsAfterDate, isLoading, personalTrainerBookings, groupActivitiesBookings };
}
