import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBookingStatus } from "../../services/apiBookings";

export function useUpdateBookingStatus() {
  const queryClient = useQueryClient();
  
  const { mutate: updateStatus } = useMutation({
    mutationFn: ({ statusValue, id }: {statusValue: string, id: string}) => updateBookingStatus(statusValue, id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success("Status został zmieniony.");
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return {updateStatus}
}
