import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import SidebarOptions from "./SidebarOptions";

import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

function AppLayout() {
  const [navigationVisibility, setNavigationVisibility] = useState("hidden");

  function showNav() {
    navigationVisibility === "hidden"
      ? setNavigationVisibility("")
      : setNavigationVisibility("hidden");
  }

  return (
    <div
      className={` h-screen w-screen bg-slate-900 text-primaryTextColor transition-all  lg:relative lg:grid lg:grid-cols-[auto_1fr]`}
    >
      <button
        className="absolute right-1 top-1 z-20 text-2xl lg:hidden"
        onClick={showNav}
      >
        {navigationVisibility ? 
        <HiMenuAlt3 /> :
        <HiOutlineXMark/>
        
      }
      </button>
      <div
        className={`${navigationVisibility === "hidden" ? "fixed translate-x-[-100%]" : " absolute bottom-0 left-0 right-0 top-0 z-10 overflow-hidden  bg-slate-900"}  font-semibold lg:relative lg:translate-x-0`}
      >
        <Logo />
        <Sidebar setNavigationVisibility={setNavigationVisibility} />

        <SidebarOptions />
      </div>
      <div className={`grid bg-slate-600 overflow-auto `}>
        <main className="lg:text-md h-full self-center overflow-auto bg-slate-600 py-10  text-center text-sm">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default AppLayout;
