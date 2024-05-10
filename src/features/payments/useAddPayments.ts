import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditPayments } from "../../services/apiPayments";
import toast from "react-hot-toast";

export function useAddPaymets() {
  const queryClient = useQueryClient();

  const { mutate: addPayment } = useMutation({
    mutationFn: addOrEditPayments,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      toast.success("Płatność została dodana.");
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return {addPayment};
}
