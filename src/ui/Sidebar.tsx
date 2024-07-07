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

function Sidebar({
  setNavigationVisibility,
}: {
  setNavigationVisibility: React.Dispatch<React.SetStateAction<string>>;
}) {
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
      <nav className="tracking-wider">
        <ul className="flex flex-col items-center gap-2 px-5 pt-5 lg:items-start lg:gap-5 ">
          {navItems.map((navItem) => (
            <li key={navItem.url}>
              <NavLink
                to={navItem.url}
                onClick={() => setNavigationVisibility("hidden")}
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
