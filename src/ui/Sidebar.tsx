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
      <nav className=" t-0 sticky col-[1_/_2] row-[2_/_3] border-slate-700 transition">
        <ul className="flex flex-col gap-5 pl-10 pt-5 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                clsx(
                  "flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl transition hover:bg-slate-700",
                  isActive
                    ? "border-l-4  border-violet-400 bg-slate-700"
                    : null,
                )
              }
            >
              <HiOutlineHome className="text-3xl font-extrabold text-slate-200" />
              <span className="text-slate-300">Start</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trainers"
              className={({ isActive }) =>
                clsx(
                  "flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl transition hover:bg-slate-700",
                  isActive ? "border-l-4 border-violet-400 bg-slate-700" : null,
                )
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
                clsx(
                  "flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl transition hover:bg-slate-700",
                  isActive
                    ? "border-l-4 border-violet-400 bg-slate-700 "
                    : null,
                )
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
                clsx(
                  "flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl transition hover:bg-slate-700",
                  isActive
                    ? "border-l-4 border-violet-400 bg-slate-700 "
                    : null,
                )
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
                clsx(
                  "flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl transition hover:bg-slate-700",
                  isActive ? "border-l-4 border-violet-400 bg-slate-700" : null,
                )
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
                clsx(
                  "flex w-full items-center gap-2 rounded-md px-2 py-2 text-xl transition hover:bg-slate-700",
                  isActive
                    ? "border-l-4 border-violet-400 bg-slate-700 "
                    : null,
                )
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
