import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useLoggedUser from "../features/authentication/useLoggedUser";
import Spinner from "./Spinner";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const { user, isLoading } = useLoggedUser();
  const userIsAuthenticated = user?.role === "authenticated";

  useEffect(
    function () {
      if (!userIsAuthenticated && !isLoading) navigate("/login");
    },
    [navigate, userIsAuthenticated, isLoading],
  );
  if (isLoading) return <Spinner />;

  if (userIsAuthenticated) return children;
}
