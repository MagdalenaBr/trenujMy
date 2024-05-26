import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelPurchase as cancelFn } from "../../services/apiPurchaseMembership";
import toast from "react-hot-toast";

export function useCancelPurchase() {
  const queryClient = useQueryClient();
  const { mutate: cancelPayment } = useMutation({
    mutationFn: ({ value, id }: { value: boolean; id: string }) =>
      cancelFn(value, id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["payments"],
      });
      toast.success("Karnet został anulownay.");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return { cancelPayment };
}
