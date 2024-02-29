import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editOpenHours } from "../../services/apiOpenHours";
import toast from "react-hot-toast";

export function useEditOpenHours() {
	const queryClient = useQueryClient();
	const { mutate: changeOpenHours } = useMutation({
		mutationFn: ({ newHours, id }) => editOpenHours(newHours, id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["openHours"],
			});
			toast.success("Godziny otwarcia zostały edytowane.");
		},
		onError(error) {
			toast.error(error.message);
		},
	});
	return { changeOpenHours };
}
