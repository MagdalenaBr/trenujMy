import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { userSignUp } from "../../services/apiAuthentication";

export default function useUserSignUp() {
  const { mutate: signUp } = useMutation({
    mutationFn: (newUser: { email: string; password: string; name: string }) =>
      userSignUp(newUser),
    onSuccess() {
      toast.success("Konto zostało utworzaone. Na podany e-mail wysłaliśmy link weryfikacyjny.");
    },
    onError() {
      toast.error("Wystąpił błąd podczas dodawania użytkownika.");
    },
  });

  return { signUp };
}
