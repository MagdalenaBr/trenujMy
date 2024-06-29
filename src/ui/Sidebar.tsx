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
import SidebarOptions from "./SidebarOptions";

function Sidebar({ navigationVisibility }: { navigationVisibility: string }) {
  const navItems = [
    { title: "Start", url: "/", icon: <HiOutlineHome /> },
    { title: "Trenerzy", url: "/trenerzy", icon: <HiOutlineUserGroup /> },
    {
      title: "Rezerwacje",
      url: "/rezerwacje",
      icon: <HiOutlinePencilSquare />,
    },
    { title: "Grafik", url: "/grafik", icon: <HiOutlineCalendarDays /> },
    { title: "Klienci", url: "/klienci", icon: <HiOutlineIdentification /> },
    {
      title: "Płatności",
      url: "/platnosci",
      icon: <HiOutlineCurrencyDollar />,
    },
    { title: "Użytkownicy", url: "/uzytkownicy", icon: <HiOutlineUser /> },
  ];
  return (
    <>
      <nav className="row-[2_/_3] tracking-wider">
        <ul className="flex flex-col gap-2 lg:gap-5 px-5 pt-5 items-center ">
          {navItems.map((navItem) => (
            <li>
              <NavLink
                to={navItem.url}
                className={({
                  isActive,
                }) => ` flex w-[12rem] items-center gap-2 px-2 py-2 text-xl hover:bg-activeBkg hover:text-activeText
              ${isActive && "border-l-4  border-accentColor1 bg-activeBkg text-activeText"}`}
              >
                <div className="text-3xl font-extrabold text-slate-300">
                  {navItem.icon}
                </div>

                <span>{navItem.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
