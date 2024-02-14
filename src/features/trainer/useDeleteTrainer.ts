import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTrainer } from "../../services/apiTrainers";
import toast from "react-hot-toast";

export function useDeleteTrainer() {
	const queryClient = useQueryClient();

	const { mutate: deleteOneTrainer } = useMutation({
		mutationFn: (id: number) => deleteTrainer(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["trainers"],
			});
			toast.success("Trener został usunięty!");
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	return { deleteOneTrainer };
}
