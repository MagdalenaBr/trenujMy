import { useQuery } from "@tanstack/react-query";
import { getGymMembership } from "../../services/apiGymMembership";

export function useGymMembership() {
  const { data: gymMembership, isLoading } = useQuery({
    queryKey: ["gymMembership"],
    queryFn: getGymMembership,
  });

  return {gymMembership, isLoading}
}


