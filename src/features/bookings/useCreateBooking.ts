import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addOrEditBooking } from "../../services/apiBookings";

export function useCreateBooking() {
	const queryClient = useQueryClient();

	const { mutate: createBooking } = useMutation({
		mutationFn: addOrEditBooking,
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["bookings"],
			});
			toast.success("Rezerwacja została dodana!");
		},
		onError(error) {
			toast.error(error.message);
		},
	});

	return { createBooking };
}


