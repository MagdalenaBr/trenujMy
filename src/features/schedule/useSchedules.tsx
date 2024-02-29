import { useQuery } from "@tanstack/react-query";
import { getSchedule } from "../../services/apiSchedule";


export function useSchedules() {
	const {
		data: schedule,
		isLoading: scheduleIsLoading,
		error,
	} = useQuery({
		queryKey: ["schedule"],
		queryFn: getSchedule,
	});

	return { schedule, scheduleIsLoading, error };
}
