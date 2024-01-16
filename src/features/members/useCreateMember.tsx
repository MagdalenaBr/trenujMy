import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMember } from "../../services/apiMembers";
import toast from "react-hot-toast";

function useCreateMember() {
	const queryClient = useQueryClient();

	const { mutate: createMember } = useMutation({
		mutationFn: addMember,
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["members"],
			});
			toast.success("Klient został dodany!");
		},
		onError() {
			toast.error("Wystąpił błąd. Spróbuj jeszcze raz!");
		},
	});

	return { createMember };
}

export default useCreateMember;
