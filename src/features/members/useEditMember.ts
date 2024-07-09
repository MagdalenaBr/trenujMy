import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommonMemberDataTypes } from "../../types/membersTypes";
import { addOrEditMember } from "../../services/apiMembers";


export function useEditMember() {
	const queryClient = useQueryClient();
	
	const { mutate: editMember } = useMutation({
		mutationFn: ({ newMember, id }: {newMember: CommonMemberDataTypes, id: string}) =>
			addOrEditMember(newMember, id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["members"],
			});
			toast.success("Klient został edytowany!");
		},
		onError(error) {
			toast.error(error.message);
		}
	});
	return { editMember };
}
