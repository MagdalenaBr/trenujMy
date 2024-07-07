import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditTrainers } from "../../services/apiTrainers";
import toast from "react-hot-toast";

type TrainerTypes = {
	image?: FileList | string;
	name: string;
	phone: string;
	price?: number | null;
	category: string;
}

export function useCreateTrainer() {
	const queryClient = useQueryClient();
	const { mutate: createTrainer } = useMutation({
		mutationFn: (newTrainers: TrainerTypes )=> addOrEditTrainers(newTrainers),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["trainers"],
			});
			toast.success("Trener został dodany!");
		},
		onError: error => {
			toast.error(error.message);
		},
	});
	return { createTrainer };
}
