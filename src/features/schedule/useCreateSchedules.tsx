import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditSchedule } from "../../services/apiSchedule";
import toast from "react-hot-toast";

export function useCreateSchedules() {
	const queryClient = useQueryClient();
	const { mutate: createClasses } = useMutation({
		mutationFn: addOrEditSchedule,
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["schedule"],
			});
			toast.success("Zajęcia zostały dodane do grafiku!");
		},
		onError(error) {
			toast.error(error.message);
		},
	});

    return {createClasses}
}
