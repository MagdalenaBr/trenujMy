import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditMembershipPurchase} from "../../services/apiPurchaseMembership";

export function usePurchaseMembership() {
  const queryClient = useQueryClient();

  const { mutate: addPayment } = useMutation({
    mutationFn: addOrEditMembershipPurchase,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["purchasedMemberships"] });
      toast.success("Karnet został dodany.");
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return { addPayment };
}
