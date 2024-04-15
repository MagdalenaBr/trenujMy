import { NavLink } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import LogOut from "../features/authentication/LogOut";

function Header() {
  return (
    <header className="sticky top-0 col-[1_/_3] row-[1_/_2] flex justify-between bg-slate-900 px-7 py-5">
      <Logo />
      <div>
        <div className="flex items-center gap-2 text-xl dark:text-slate-200">
          <p>bronxx</p>
          <NavLink>
            <HiOutlineUser />
          </NavLink>
          <DarkMode />
          <LogOut />
        </div>
      </div>
    </header>
  );
}

export default Header;
