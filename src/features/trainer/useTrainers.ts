import { useQuery } from "@tanstack/react-query";
import { getTrainers } from "../../services/apiTrainers";


export function useTrainers() {
  const {
    data: trainers,
    isLoading: trainerIsLoading,
    error,
  } = useQuery({
    queryKey: ["trainers",],
    queryFn: getTrainers,
  });

  return { trainers, trainerIsLoading, error };
}
