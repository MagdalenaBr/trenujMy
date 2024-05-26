import { useQuery } from "@tanstack/react-query";
import { getPurchasedMemberschips } from "../../services/apiPurchaseMembership";

export function usePurchasedMembership() {
  const { data: payments, isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: getPurchasedMemberschips,
  });

  return { payments, isLoading };
}
