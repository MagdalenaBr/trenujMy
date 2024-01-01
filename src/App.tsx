import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trainers from "./pages/Trainers";
import Bookings from "./pages/Bookings";
import Members from "./pages/Members";
import Users from "./pages/Users";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import TrainerPage from "./features/trainer/TrainerPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			<Toaster />
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index path='/' element={<Home />} />
						<Route path='/trainers' element={<Trainers />} />
						<Route path='/trainers/:trainerId' element={<TrainerPage />} />
						<Route path='/bookings' element={<Bookings />} />
						<Route path='/members' element={<Members />} />
						<Route path='/users' element={<Users />} />
						<Route path='/*' element={<PageNotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
