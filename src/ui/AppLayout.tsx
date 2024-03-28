import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className='text-primaryTextColor grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-[linear-gradient(to_right_bottom,#cbd5e1c5,#94a3b8d1),url("./data/background.jpg")] bg-cover dark:bg-[linear-gradient(to_right_bottom,rgba(30,41,59,0.95),rgba(15,23,42,0.95)),url("./data/background.jpg")] '>
      <Header />
      <Sidebar />
      <main className="text-md col-[2_/_3] row-[2_/_3] h-[90vh] overflow-auto text-center">
        <Outlet />
      </main>
    </div>
  );
}
export default AppLayout;
