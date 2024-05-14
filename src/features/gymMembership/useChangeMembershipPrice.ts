import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeMembershipPrice } from "../../services/apiGymMembership";
import toast from "react-hot-toast";

export function useChangeMembershipPrice() {
  const queryClient = useQueryClient();
  const { mutate: changePrice } = useMutation({
    mutationFn: changeMembershipPrice,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["gymMembership"],
      });
      toast.success("Cena została zmieniona.");
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return {changePrice};
}
