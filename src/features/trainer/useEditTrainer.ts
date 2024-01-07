import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTrainer } from "../../services/apiTrainers";
import toast from "react-hot-toast";

export function useEditTrainer() {
	const queryClient = useQueryClient();
	const { mutate: editTrainer } = useMutation({
		mutationFn: (id, newTrainers) => updateTrainer(id, newTrainers),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["trainers"],
			});
			toast.success("Trener został dodany!");
		},
		onError: () => {
			toast.error('Wystąpił błąd. Spróbuj jeszcze raz!')
		}
	});
	return { editTrainer };
}