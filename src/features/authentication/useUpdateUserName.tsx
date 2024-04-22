import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserName as update } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useUpdateUserName() {
  const queryClient = useQueryClient();
  const { mutate: updateUser } = useMutation({
    mutationFn: update,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("Dane zostały zmienione");
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return { updateUser };
}
