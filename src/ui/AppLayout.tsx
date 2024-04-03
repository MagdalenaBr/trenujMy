import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="relative grid h-full w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-bgColor/80 text-primaryTextColor">
      <img
        src="../public/background.jpg"
        aria-hidden="true"
        className="absolute z-[-100] h-full w-full object-cover"
      />
      <Header />
      <Sidebar />
      <main className="text-md col-[2_/_3] row-[2_/_3] h-[90vh] overflow-auto text-center">
        <Outlet />
      </main>
    </div>
  );
}
export default AppLayout;
