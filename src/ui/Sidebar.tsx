import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineUserGroup,
  HiOutlineUser,
  HiOutlinePencilSquare,
  HiOutlineIdentification,
  HiOutlineCurrencyDollar,
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
              }) => ` flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl hover:bg-activeBkg hover:text-activeText
             ${isActive && "border-l-4  border-accentColor1 bg-activeBkg text-activeText"}`}
            >
              <HiOutlineHome className="text-3xl font-extrabold text-slate-300" />
              <span>Start</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trenerzy"
              className={({ isActive }) =>
                ` flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl hover:bg-activeBkg hover:text-activeText
              ${isActive && "border-l-4  border-accentColor1 bg-activeBkg text-activeText"}`
              }
            >
              <HiOutlineUserGroup className="text-3xl font-extrabold text-slate-300" />
              <span>Trenerzy</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rezerwacje"
              className={({ isActive }) =>
                ` flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl hover:bg-activeBkg hover:text-activeText
              ${isActive && "border-l-4  border-accentColor1 bg-activeBkg text-activeText"}`
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
                ` flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl hover:bg-activeBkg hover:text-activeText
              ${isActive && "border-l-4  border-accentColor1 bg-activeBkg text-activeText"}`
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
                ` flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl hover:bg-activeBkg hover:text-activeText
              ${isActive && "border-l-4  border-accentColor1 bg-activeBkg text-activeText"}`
              }
            >
              <HiOutlineIdentification className="text-3xl font-extrabold text-slate-300" />
              <span>Klienci</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/platnosci"
              className={({ isActive }) =>
                ` flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl hover:bg-activeBkg hover:text-activeText
              ${isActive && "border-l-4  border-accentColor1 bg-activeBkg text-activeText"}`
              }
            >
              <HiOutlineCurrencyDollar className="text-3xl font-extrabold text-slate-300" />
              <span>Płatności</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/uzytkownicy"
              className={({ isActive }) =>
                ` flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl hover:bg-activeBkg hover:text-activeText
              ${isActive && "border-l-4  border-accentColor1 bg-activeBkg text-activeText"}`
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
