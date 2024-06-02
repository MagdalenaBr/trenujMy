import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelPayment as cancelFn } from "../../services/apiPayments";
import toast from "react-hot-toast";

export function useCancelPayment() {
  const queryClient = useQueryClient();
  const { mutate: cancelPayment } = useMutation({
    mutationFn: ({ value, id }: { value: boolean; id: string }) =>
      cancelFn(value, id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["payments"],
      });
      toast.success("Płatność została anulowana.");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return { cancelPayment };
}
