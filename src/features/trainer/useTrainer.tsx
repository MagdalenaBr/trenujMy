import { useQuery } from "@tanstack/react-query";
import { getTrainers } from "../../services/apiTrainers";

export function useTrainer() {
	const { data: trainers, isLoading } = useQuery({
		queryKey: ["trainers"],
		queryFn: getTrainers,
	});

	return { trainers, isLoading };
}
