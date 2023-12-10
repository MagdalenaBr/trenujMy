import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTrainers } from "../../services/apiTrainers";
import toast from "react-hot-toast";


interface IFormInputs {
	name: string;
	category: string;
	price: string;
	phone: number;
	photo: string;
}

export function useCreateTrainer() {
	const queryClient = useQueryClient();
	const { mutate: createTrainer } = useMutation({
		mutationFn: (newTrainers: IFormInputs) => addTrainers(newTrainers),
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

	return { createTrainer };
}
