import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import SidebarOptions from "./SidebarOptions";

function AppLayout() {
  return (
    <div className="relative grid h-screen w-full grid-cols-[auto_1fr] bg-slate-900 text-primaryTextColor">
      <div className="grid grid-rows-[auto_1fr] font-semibold">
        <Logo />
        <Sidebar />
        <SidebarOptions />
      </div>
      <div className=" overflow-auto grid  bg-slate-600 ">
        <main className="text-md self-center h-[90%] overflow-auto bg-slate-600  text-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default AppLayout;
