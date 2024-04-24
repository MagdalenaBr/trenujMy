import { NavLink } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import LogOut from "../features/authentication/LogOut";
import useLoggedUser from "../features/authentication/useLoggedUser";

function Header() {
  const { user } = useLoggedUser();
  return (
    <header className="sticky top-0 col-[1_/_3] row-[1_/_2] flex justify-between  bg-slate-900/70 px-7 py-5">
      <Logo />
      <div>
        <div className="flex items-center gap-2 text-xl ">
          <NavLink
            to={"/uzytkownik"}
            className="flex gap-2 rounded-md border-2 border-transparent px-1 py-1 text-2xl hover:border-accentColor2"
          >
            <span>{user?.user_metadata.userName}</span>
            <HiOutlineUser className="self-center" />
          </NavLink>
          <DarkMode />
          <LogOut />
        </div>
      </div>
    </header>
  );
}

export default Header;
