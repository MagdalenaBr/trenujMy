import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

interface DataTypes {
	status: string;
	trainerId: number;
	memberId: number;
	date: string;
}

export function useEditBooking() {
	const queryClient = useQueryClient();
	const { mutate: editBooking } = useMutation({
		mutationFn: ({ newBooking, id }: { newBooking: DataTypes; id: number }) =>
			addOrEditBooking(newBooking, id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["bookings"],
			});
			toast.success("Rezerwacja została edytowna!");
		},
		onError(error) {
			toast.error(error.message);
		},
		throwOnError: true,
	});
	return { editBooking };
}
