import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { userLogOut } from "../../services/apiAuthentication";

export default function useUserLogOut() {
  const queryClient = useQueryClient();

  const { mutate: logout } = useMutation({
    mutationFn: userLogOut,
    onSuccess() {
      queryClient.removeQueries();
      toast.success("Użytkownik został wylogowany");
    },
    onError(error) {
      toast.success(error.message);
    },
  });

  return logout;
}
