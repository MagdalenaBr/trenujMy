import { DateTime } from "luxon";
import { TODAY_DAY } from "../utils/constants";
import useLoggedUser from "../features/authentication/useLoggedUser";
import PurchasedMembershipsStats from "../features/homePage/PurchasedMembershipsStats";
import HomePageBookingsContainer from "../features/homePage/HomePageBookingsContainer";
import FilterPanel from "../ui/FilterPanel";
import MainContainer from "../ui/MainContainer";

function Home() {
  const { user } = useLoggedUser();
  return (
    <MainContainer>
      <h1 className="pb-4 text-start text-2xl tracking-wider">
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
        <HomePageBookingsContainer />
        <PurchasedMembershipsStats />
      </div>
    </MainContainer>
  );
}

export default Home;
