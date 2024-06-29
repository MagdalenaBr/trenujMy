import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import SidebarOptions from "./SidebarOptions";

import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

function AppLayout() {
  const [navigationVisibility, setNavigationVisibility] = useState("hidden");

  function showNav() {
    navigationVisibility === "hidden"
      ? setNavigationVisibility("")
      : setNavigationVisibility("hidden");
  }

  return (
    <div
      className={` bg-slate-900  text-primaryTextColor transition-all lg:relative lg:grid lg:h-screen lg:w-full lg:grid-cols-[auto_1fr]`}
    >
      <button
        className="absolute right-1 top-1 z-20 text-2xl lg:hidden"
        onClick={showNav}
      >
        <HiMenuAlt3 />
      </button>
      <div
        className={`${navigationVisibility === "hidden" ? "absolute right-0 top-0 translate-x-full" : " absolute bottom-0 left-0 right-0 top-0 z-10 overflow-hidden bg-slate-900"} grid-rows-[auto_1fr] font-semibold lg:relative lg:grid lg:translate-x-0`}
      >
        <Logo />
        <Sidebar navigationVisibility={navigationVisibility} />

        <SidebarOptions />
      </div>
      <div className={`grid overflow-auto  bg-slate-600 `}>
        <main className="h-full self-center overflow-auto bg-slate-600 py-10 text-center  text-lg">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default AppLayout;
