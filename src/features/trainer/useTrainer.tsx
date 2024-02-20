import { useQuery } from "@tanstack/react-query";
import { getOneTrainer } from "../../services/apiTrainers";

export function useTrainer(id) {
	const { data: selectedTrainer, isLoading: trainerIsLoading } = useQuery({
		queryKey: ["trainers", id],
		queryFn: () => getOneTrainer(id),
	});
	
	return { selectedTrainer, trainerIsLoading };
}
