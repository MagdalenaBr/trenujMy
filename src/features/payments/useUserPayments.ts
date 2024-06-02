import { useQuery } from "@tanstack/react-query";
import { getUserPayments } from "../../services/apiPayments";

export function useUserPayments(id: string) {
  const { data: userPayments } = useQuery({
    queryKey: ["payments"],
    queryFn: () => getUserPayments(id),
  });

  return { userPayments };
}
