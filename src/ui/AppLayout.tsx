import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
	return (
		<div className='grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] bg-[linear-gradient(to_right_bottom,rgba(30,41,59,0.95),rgba(15,23,42,0.95)),url("./data/background.jpg")] bg-cover '>
			<Header />
			<Sidebar />
			<main className='text-center text-md row-[2_/_3] col-[2_/_3] overflow-auto h-[90vh]'>
				<Outlet />
			</main>
		</div>
	);
}

// bg-gradient-to-br from-slate-800 to-slate-900 font-notoSans h-screen text-slate-800
export default AppLayout;
