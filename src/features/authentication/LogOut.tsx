import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import useUserLogOut from "./useUserLogOut";
import Button from "../../ui/Button";

export default function LogOut() {
  const logout = useUserLogOut();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
    logout();
  }
  return (
    <Button handleClick={handleClick}>
      <IoLogOutOutline  />
    </Button>
  );
}
