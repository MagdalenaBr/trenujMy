import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogIn } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useUserLogIn() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending, mutate: login } = useMutation({
    mutationFn: ({ email, password}: { email: string; password: string}) =>
      userLogIn(email, password),
    onSuccess(user) {
      queryClient.setQueryData(["user"], user.user);
      navigate("/");
    },
    onError() {
      toast.error("Błędny email lub hasło");
    },
  });
  return { login, isPending };
}
