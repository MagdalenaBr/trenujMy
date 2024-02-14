import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditTrainers } from "../../services/apiTrainers";
import toast from "react-hot-toast";
interface IFormInputs {
	id?: number;
	name: string;
	category: string;
	price: string;
	phone: string;
	image: any;
}

export function useCreateTrainer() {
	const queryClient = useQueryClient();
	const { mutate: createTrainer } = useMutation({
		mutationFn: (newTrainers: IFormInputs) => addOrEditTrainers(newTrainers),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["trainers"],
			});
			toast.success("Trener został dodany!");
		},
		onError: (error) => {
			toast.error(error.message)
		}
	});
	return { createTrainer };
}
