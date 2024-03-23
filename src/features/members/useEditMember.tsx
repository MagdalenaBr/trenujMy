import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditMember } from "../../services/apiMembers";
import toast from "react-hot-toast";

interface DataTypes {
	city: string;
	email: string;
	endGymMembership?: string | null;
	gender: string;
	gymMembershipType?: string | null;
	name: string;
	phone: string;
	startGymMembership?: string | null;
}
export function useEditMember() {
	const queryClient = useQueryClient();
	const { mutate: editMember } = useMutation({
		mutationFn: ({ newMember, id }: {newMember: DataTypes, id: number}) =>
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
