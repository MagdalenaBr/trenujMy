import { useQuery } from "@tanstack/react-query";
import { getOpenHours } from "../../services/apiOpenHours";

export function useOpenHours() {
  const { data: openHours, isLoading } = useQuery({
    queryKey: ["openHours"],
    queryFn: getOpenHours,
  });

  return { openHours, isLoading };
}
