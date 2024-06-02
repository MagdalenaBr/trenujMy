import { useQuery } from "@tanstack/react-query";
import { getUserPurchasedMemberships } from "../../services/apiPurchaseMembership";

export function useUserPurchasedMemberships(id: string) {
  const { data: purchasedMemberships } = useQuery({
    queryKey: ["purchasedMemberships"],
    queryFn: () => getUserPurchasedMemberships(id),
  });

  return { purchasedMemberships };
}
