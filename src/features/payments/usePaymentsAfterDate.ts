import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getPaymentsAfterDate } from "../../services/apiPayments";

export function usePaymensAfterDate() {
  const [searchParams] = useSearchParams();
  const selectedTimeRange = !searchParams.get("zakres")
    ? "7"
    : searchParams.get("zakres");
  const { data: paymentsAfterDate, isLoading } = useQuery({
    queryKey: ["payments", selectedTimeRange],
    queryFn: () => getPaymentsAfterDate(selectedTimeRange),
  });

  return { paymentsAfterDate, isLoading };
}
