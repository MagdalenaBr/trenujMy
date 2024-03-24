import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditTrainers } from "../../services/apiTrainers";
import toast from "react-hot-toast";

type TrainerTypes = {
	image: FileList | string;
	name: string;
	phone: string;
	price: number;
	category: string;
};

export function useEditTrainer() {
	const queryClient = useQueryClient();
	const { mutate: editTrainer } = useMutation({
		mutationFn: ({
			newTrainersData,
			id,
		}: {
			newTrainersData: TrainerTypes;
			id: number;
		}) => addOrEditTrainers(newTrainersData, id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["trainers"],
			});
			toast.success("Trener został edytowany!");
		},
		onError: error => {
			toast.error(error.message);
		},
	});
	return { editTrainer };
}
