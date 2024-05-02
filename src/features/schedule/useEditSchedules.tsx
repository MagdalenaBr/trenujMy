import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditSchedule } from "../../services/apiSchedule";
import toast from "react-hot-toast";

interface NewClassesTypes {
	date: string;
	name: string;
	numOfPlaces: number;
	trainerId: string 
}

export function useEditSchedules() {
	const queryClient = useQueryClient();
	const { mutate: editClasses } = useMutation({
		mutationFn: ({ newClasses, id }: {newClasses: NewClassesTypes, id: string}) => addOrEditSchedule(newClasses, id),
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
