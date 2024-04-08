import { useQuery } from "@tanstack/react-query";
import { getTrainers } from "../../services/apiTrainers";
import { useSearchParams } from "react-router-dom";

export function useTrainers() {
  const [searchParams] = useSearchParams();
  const sortValue = { name: "category", value: searchParams.get("category") };

  const {
    data: trainers,
    isLoading: trainerIsLoading,
    error,
  } = useQuery({
    queryKey: ["trainers", sortValue],
    queryFn: ()=>getTrainers(sortValue),
  });

  return { trainers, trainerIsLoading, error };
}
