import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditMember } from "../../services/apiMembers";
import toast from "react-hot-toast";
type MembersType = {
	newMember: {
		id?: number;
		name: string;
		email: string;
		phone: string;
		gender: string;
		city: string;
		startGymMembership?: string | null;
		endGymMembership?: string | null;
		gymMembershipType?: string | null;
	};
	id: number;
};

export function useEditMember() {
	const queryClient = useQueryClient();
	const { mutate: editMember } = useMutation({
		mutationFn: ({ newMember, id }: MembersType) =>
			addOrEditMember(newMember, id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["members"],
			});
			toast.success("Klient został edytowany!");
		},
		onError(error) {
			toast.error(error.message);
		},
		throwOnError: true,
	});
	return { editMember };
}
