import { HiOutlineUser } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";
import LogOut from "../features/authentication/LogOut";
import useLoggedUser from "../features/authentication/useLoggedUser";

export default function SidebarOptions() {
  const { user } = useLoggedUser();
  return (
    <div className="row-[3_/_4] flex flex-col gap-2 px-5 py-4 text-xl text-accentColor2">
      {/* <NavLink
        to={"/uzytkownik"}
        className="hover:border-activeBkg flex gap-2 rounded-md border-2 border-transparent px-1 py-1 text-2xl"
      >
        <HiOutlineUser className="self-center" />
        <span>{user?.user_metadata.userName}</span>
      </NavLink> */}

      <DarkMode />
      <div className=" flex items-center">
        <LogOut />
        <span>{user?.user_metadata.userName}</span>
      </div>
    </div>
  );
}
