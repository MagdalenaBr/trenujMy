import { useQuery } from "@tanstack/react-query";
import { getUserPayments } from "../../services/apiPayments";

export function useUserPayments(id) {
  const { data: payment } = useQuery({
    queryKey: ["payments"],
    queryFn:()=> getUserPayments(id)
  });

  return { payment };
}
