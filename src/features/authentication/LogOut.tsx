import { IoLogOutOutline } from "react-icons/io5";
import useUserLogOut from "./useUserLogOut";
import { useNavigate } from "react-router-dom";
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
