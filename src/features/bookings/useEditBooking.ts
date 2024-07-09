import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { NewBookingTypes } from "../../types/bookingTypes";

export function useEditBooking() {
  const queryClient = useQueryClient();
  const { mutate: editBooking } = useMutation({
    mutationFn: ({
      newBooking,
      id,
    }: {
      newBooking: NewBookingTypes;
      id: string;
    }) => addOrEditBooking(newBooking, id),
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
