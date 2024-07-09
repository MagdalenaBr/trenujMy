import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUserPassword as update } from "../../services/apiAuthentication";

export function useUpdateUserPassword() {
  const queryClient = useQueryClient();

  const { mutate: updateUserPassword } = useMutation({
    mutationFn: update,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("Hasło zostało zmienione");
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return { updateUserPassword };
}
