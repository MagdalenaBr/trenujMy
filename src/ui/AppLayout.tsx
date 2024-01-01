import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
	return (
		<div className='grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] bg-neutral-50 font-notoSans h-screen'>
			<Header />
			<Sidebar />
			<main className='py-9 text-center text-md row-[2_/_3] col-[2_/_3] overflow-auto h-[90vh]'>
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayout;
