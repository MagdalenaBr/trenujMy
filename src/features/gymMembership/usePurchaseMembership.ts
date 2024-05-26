import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditMembershipPurchase} from "../../services/apiPurchaseMembership";
import toast from "react-hot-toast";

export function usePurchaseMembership() {
  const queryClient = useQueryClient();

  const { mutate: addPayment } = useMutation({
    mutationFn: addOrEditMembershipPurchase,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      toast.success("Karnet został dodany.");
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return { addPayment };
}
