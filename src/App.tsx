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
import MemberPage from "./features/members/MemberPage";
import SchedulePage from "./pages/SchedulePage";
import EditSchedulePage from "./features/schedule/EditSchedulePage";
import DarkModeProvider from "./context/DarkModeContext";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import Payments from "./pages/Payments";

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index path="/" element={<Home />} />
              <Route path="/trenerzy" element={<Trainers />} />
              <Route path="/trenerzy/:trainerId" element={<TrainerPage />} />
              <Route path="/rezerwacje" element={<Bookings />} />
              <Route path="/klienci" element={<Members />} />
              <Route path="/klienci/:memberId" element={<MemberPage />} />
              <Route path="/uzytkownicy" element={<Users />} />
              <Route path="/grafik" element={<SchedulePage />} />
              <Route
                path="/grafik/zmien-grafik"
                element={<EditSchedulePage />}
              />
               <Route path="/platnosci" element={<Payments />} />
            </Route>
            <Route index path="/login" element={<Login />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
