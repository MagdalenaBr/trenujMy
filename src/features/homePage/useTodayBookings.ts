import { useQuery } from "@tanstack/react-query";
import { getTodayBookings } from "../../services/apiBookings";

export function useTodayBookings() {
  const { data: todayBookings, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getTodayBookings,
  });

  return { todayBookings, isLoading };
}
