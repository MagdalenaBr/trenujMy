import { NavLink } from "react-router-dom";
import clsx from "clsx";
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
      <nav className=" t-0 sticky  col-[1_/_2] row-[2_/_3] border-slate-700 transition-colors delay-100">
        <ul className="flex flex-col gap-5 pl-10 pt-5 ">
          <li>
            <NavLink
              to="/"
              className={({
                isActive,
              }) => ` flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl transition hover:bg-slate-700
             ${isActive && "border-l-4  border-violet-400 bg-slate-700"}`}
            >
              <HiOutlineHome className="text-3xl font-extrabold text-slate-200" />
              <span className="text-slate-300">Start</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trainers"
              className={({ isActive }) =>
                ` flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl transition hover:bg-slate-700
              ${isActive && "border-l-4  border-violet-400 bg-slate-700"}`
              }
            >
              <HiOutlineTrophy className="text-3xl font-extrabold text-slate-200" />
              <span className="text-slate-300">Trenerzy</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookings"
              className={({ isActive }) =>
                ` flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl transition hover:bg-slate-700
              ${isActive && "border-l-4  border-violet-400 bg-slate-700"}`
              }
            >
              <HiOutlinePencilSquare className="text-3xl font-extrabold text-slate-200" />
              <span className="text-slate-300">Rezerwacje</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/schedule"
              className={({ isActive }) =>
                ` flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl transition hover:bg-slate-700
              ${isActive && "border-l-4  border-violet-400 bg-slate-700"}`
              }
            >
              <HiOutlineCalendarDays className="text-3xl font-extrabold text-slate-200" />
              <span className="text-slate-300">Grafik</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/members"
              className={({ isActive }) =>
                ` flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl transition hover:bg-slate-700
              ${isActive && "border-l-4  border-violet-400 bg-slate-700"}`
              }
            >
              <HiOutlineUserGroup className="text-3xl font-extrabold text-slate-200" />
              <span className="text-slate-300">Klienci</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                ` flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl transition hover:bg-slate-700
              ${isActive && "border-l-4  border-violet-400 bg-slate-700"}`
              }
            >
              <HiOutlineUser className="text-3xl font-extrabold text-slate-200" />
              <span className="text-slate-300">Użytkownicy</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
