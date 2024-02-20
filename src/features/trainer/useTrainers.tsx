import { useQuery } from "@tanstack/react-query";
import { getTrainers } from "../../services/apiTrainers";

export function useTrainers() {
	const {
		data: trainers,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["trainers"],
		queryFn: getTrainers,
	});

	return { trainers, isLoading, error };
}
