import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditTrainers } from "../../services/apiTrainers";
import toast from "react-hot-toast";
type TrainerTypes = {
	newTrainersData: {
		id: number
		name: string;
		category: string;
		price: string;
		phone: number;
		image: string |undefined;
	};
	id: number
};

export function useEditTrainer() {
	const queryClient = useQueryClient();
	const { mutate: editTrainer } = useMutation({
		mutationFn: ({ newTrainersData, id }: TrainerTypes) =>
			addOrEditTrainers(newTrainersData, id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["trainers"],
			});
			toast.success("Trener został edytowany!");
		},
		onError: () => {
			toast.error("Wystąpił błąd. Spróbuj jeszcze raz!");
		},
	});
	return { editTrainer };
}
