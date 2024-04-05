import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineTrophy,
  HiOutlineCalendarDays,
  HiOutlineUserGroup,
  HiOutlineUser,
  HiOutlinePencilSquare,
} from "react-icons/hi2";

function Sidebar() {
  return (
    <>
      <nav className=" t-0 sticky  col-[1_/_2] row-[2_/_3] border-slate-700 font-semibold">
        <ul className="flex flex-col gap-5 pl-10 pt-5 ">
          <li>
            <NavLink
              to="/"
              className={({
                isActive,
              }) => ` hover:bg-activeBkg hover:text-activeText flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl
             ${isActive && "border-accentColor1  bg-activeBkg text-activeText border-l-4"}`}
            >
              <HiOutlineHome className="text-3xl font-extrabold text-slate-300" />
              <span>Start</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trenerzy"
              className={({ isActive }) =>
                ` hover:bg-activeBkg hover:text-activeText flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl
              ${isActive && "border-accentColor1  bg-activeBkg text-activeText border-l-4"}`
              }
            >
              <HiOutlineTrophy className="text-3xl font-extrabold text-slate-300" />
              <span>Trenerzy</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rezerwacje"
              className={({ isActive }) =>
                ` hover:bg-activeBkg hover:text-activeText flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl
              ${isActive && "border-accentColor1  bg-activeBkg text-activeText border-l-4"}`
              }
            >
              <HiOutlinePencilSquare className="text-3xl font-extrabold text-slate-300" />
              <span>Rezerwacje</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grafik"
              className={({ isActive }) =>
                ` hover:bg-activeBkg hover:text-activeText flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl
              ${isActive && "border-accentColor1  bg-activeBkg text-activeText border-l-4"}`
              }
            >
              <HiOutlineCalendarDays className="text-3xl font-extrabold text-slate-300" />
              <span>Grafik</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/klienci"
              className={({ isActive }) =>
                ` hover:bg-activeBkg hover:text-activeText flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl
              ${isActive && "border-accentColor1  bg-activeBkg text-activeText border-l-4"}`
              }
            >
              <HiOutlineUserGroup className="text-3xl font-extrabold text-slate-300" />
              <span>Klienci</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/użytkownicy"
              className={({ isActive }) =>
                ` hover:bg-activeBkg hover:text-activeText flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl
              ${isActive && "border-accentColor1  bg-activeBkg text-activeText border-l-4"}`
              }
            >
              <HiOutlineUser className="text-3xl font-extrabold text-slate-300" />
              <span>Użytkownicy</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
