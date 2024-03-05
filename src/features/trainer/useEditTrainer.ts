import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditTrainers } from "../../services/apiTrainers";
import toast from "react-hot-toast";
type TrainerTypes = {
	newTrainersData: {
		id: number;
		name: string;
		category: string;
		price: number;
		phone: string;
		image: any;
	};
	id: number;
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
		onError: (error) => {
			toast.error(error.message);
		},
	});
	return { editTrainer };
}
