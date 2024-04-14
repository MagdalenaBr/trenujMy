import { useNavigate } from "react-router-dom";
import useLoggedUser from "../features/authentication/useLoggedUser";
import Spinner from "./Spinner";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const { user, isLoading } = useLoggedUser();
  console.log(user);

  if (isLoading) return <Spinner />;
  if (!user?.role && !isLoading) return navigate("/login");

  return children;
}
