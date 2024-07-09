import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditTrainers } from "../../services/apiTrainers";
import toast from "react-hot-toast";
import { NewTrainerDataTypes } from "../../types/trainersTypes";


export function useEditTrainer() {
	const queryClient = useQueryClient();
	const { mutate: editTrainer } = useMutation({
		mutationFn: ({
			newTrainersData,
			id,
		}: {
			newTrainersData: NewTrainerDataTypes;
			id: string;
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
