import { Outlet } from "react-router-dom";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

function AppLayout() {
  const [navigationVisibility, setNavigationVisibility] = useState("hidden");

  return (
    <div
      className={` h-screen w-screen bg-slate-900 text-primaryTextColor transition-all lg:relative lg:grid lg:grid-cols-[auto_1fr]`}
    >
      <MobileNav
        navigationVisibility={navigationVisibility}
        setNavigationVisibility={setNavigationVisibility}
      />

      <Nav
        navigationVisibility={navigationVisibility}
        setNavigationVisibility={setNavigationVisibility}
      />
      <div className={`grid h-screen overflow-auto bg-slate-600 `}>
        <main className="lg:text-md h-full self-center overflow-auto bg-slate-600 py-10  text-center text-sm">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default AppLayout;
