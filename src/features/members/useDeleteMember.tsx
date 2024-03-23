import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteMember } from "../../services/apiMembers";

export function useDeleteMember() {
	const queryClient = useQueryClient();

	const { mutate: deleteOneMember } = useMutation({
		mutationFn: (id: number) => deleteMember(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["members"],
			});
			toast.success("Klient został usunięty!");
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	return { deleteOneMember };
}
