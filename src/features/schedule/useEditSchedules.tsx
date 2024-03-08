import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditSchedule } from "../../services/apiSchedule";
import toast from "react-hot-toast";

type ClassesType = {
	newClasses: {
		name: string;
		numOfPlaces: number;
		trainerId: number;
		date: string;
	};
	id?: number;
};

export function useEditSchedules() {
	const queryClient = useQueryClient();
	const { mutate: editClasses } = useMutation({
		mutationFn: ({ newClasses, id }: ClassesType) => addOrEditSchedule(newClasses, id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["schedule"],
			});
			toast.success("Zajęcia zostały dodane!");
		},
		onError(error) {
			toast.error(error.message);
		},
	});

	return { editClasses };
}
