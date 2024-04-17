import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useUserSignUp() {
  const { mutate: userSignUp } = useMutation({
    mutationFn: ({ email, password, name }: { email: string; password: string; name:string}) =>
      userSignUp(email, password, name),
    onSuccess() {
      toast.success("Użytkownik został dodany");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
}
