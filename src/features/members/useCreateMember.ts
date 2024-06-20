import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditMember } from "../../services/apiMembers";
import toast from "react-hot-toast";

function useCreateMember() {
	const queryClient = useQueryClient();

	const { mutate: createMember } = useMutation({
		mutationFn: addOrEditMember,
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["members"],
			});
			toast.success("Klient został dodany!");
		},
		onError(error) {
			toast.error(error.message);
		},
	});

	return { createMember };
}

export default useCreateMember;
