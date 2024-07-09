import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPayment } from "../../services/apiPayments";

export function useAddPayment() {
  const queryClient = useQueryClient();

  const { mutate: addUserPayment } = useMutation({
    mutationFn: addPayment,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["payments"],
      });
      toast.success("Płatność została dodana.");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return { addUserPayment };
}
