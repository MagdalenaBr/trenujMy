import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSchedule } from "../../services/apiSchedule";
import toast from "react-hot-toast";

export function useCreateClasses() {
	const queryClient = useQueryClient();
	const { mutate: createClasses } = useMutation({
		mutationFn: addSchedule,
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
