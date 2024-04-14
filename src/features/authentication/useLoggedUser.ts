import { useQuery } from "@tanstack/react-query";
import { loggedUser } from "../../services/apiAuthentication";

export default function useLoggedUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: loggedUser,
  });

  return {user, isLoading}
}
