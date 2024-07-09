import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelPurchase as cancelFn } from "../../services/apiPurchaseMembership";

export function useCancelPurchase() {
  const queryClient = useQueryClient();
  
  const { mutate: cancelPurchase } = useMutation({
    mutationFn: ({ value, id }: { value: boolean; id: string }) =>
      cancelFn(value, id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["purchasedMemberships"],
      });
      toast.success("Karnet został anulownay.");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return { cancelPurchase };
}
