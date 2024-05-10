import { useQuery } from "@tanstack/react-query";
import { getPayments } from "../../services/apiPayments";

export function usePayments() {
  const { data: payments, isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: getPayments,
  });

  return { payments, isLoading };
}
