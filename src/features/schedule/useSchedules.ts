import { useQuery } from "@tanstack/react-query";
import { getSchedule } from "../../services/apiSchedule";


export function useSchedules(scheduleDataType?: string) {
	const {
		data: schedule,
		isLoading: scheduleIsLoading,
		error,
	} = useQuery({
		queryKey: ["schedule", scheduleDataType],
		queryFn: ()=>getSchedule(scheduleDataType),
		
	});

	return { schedule, scheduleIsLoading, error };
}
