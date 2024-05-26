import { useQuery } from "@tanstack/react-query";
import { getUserPurchasedMemberships } from "../../services/apiPurchaseMembership";

export function useUserPurchasedMemberships(id: string) {
  const { data: payment } = useQuery({
    queryKey: ["payments"],
    queryFn: () => getUserPurchasedMemberships(id),
  });

  return { payment };
}
