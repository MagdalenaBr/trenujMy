import { IoLogOutOutline } from "react-icons/io5";
import useUserLogOut from "./useUserLogOut";
import { useNavigate } from "react-router-dom";
import HeaderButton from "../../ui/HeaderButton";

export default function LogOut() {
  const logout = useUserLogOut();
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
    logout();
  }
  return (
    <HeaderButton onClick={handleClick}>
      <IoLogOutOutline  />
    </HeaderButton>
  );
}
