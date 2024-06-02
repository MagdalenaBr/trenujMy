import { useQuery } from "@tanstack/react-query";
import { getPurchasedMemberschips } from "../../services/apiPurchaseMembership";

export function usePurchasedMembership() {
  const { data: purchasedMemberships, isLoading } = useQuery({
    queryKey: ["purchasedMemberships"],
    queryFn: getPurchasedMemberschips,
  });

  return { purchasedMemberships, isLoading };
}
