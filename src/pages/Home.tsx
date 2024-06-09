import useLoggedUser from "../features/authentication/useLoggedUser";
import FilterPanel from "../ui/FilterPanel";
import { TODAY_DAY } from "../utils/constants";
import MainContainer from "../ui/MainContainer";
import { DateTime } from "luxon";
import TodaysBookings from "../features/homePage/TodaysBookings";
import PurchasedMembershipsStats from "../features/homePage/PurchasedMembershipsStats";

function Home() {
  const { user } = useLoggedUser();
  return (
    <MainContainer>
      <h1 className="text-start text-2xl tracking-wider pb-4">
        Witaj,{" "}
        <span className="font-bold uppercase text-accentColor2">
          {user?.user_metadata.userName}
        </span>
      </h1>
      <div className="flex justify-between">
        <p className="rounded-md border border-slate-900 bg-slate-800 px-2 py-1 font-semibold tracking-wide">
          {TODAY_DAY.toLocaleString(DateTime.DATE_HUGE)}
        </p>
        <FilterPanel />
      </div>
      <div className="grid grid-cols-5 gap-10">
      <TodaysBookings/>
      <PurchasedMembershipsStats/>

      </div>
    </MainContainer>
  );
}

export default Home;
