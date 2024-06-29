import { DateTime } from "luxon";
import { TODAY_DAY } from "../utils/constants";
import useLoggedUser from "../features/authentication/useLoggedUser";
import PurchasedMembershipsStats from "../features/homePage/PurchasedMembershipsStats";
import HomePageBookingsContainer from "../features/homePage/HomePageBookingsContainer";
import FilterPanel from "../ui/FilterPanel";
import MainContainer from "../ui/MainContainer";
import PersonalTrainersStats from "../features/homePage/PersonalTrainersStats";
import { GroupActivitiesTrainersStats } from "../features/homePage/GroupActivitiesTrainersStats";
import PaymentsStats from "../features/homePage/PaymentsStats";

function Home() {
  const { user } = useLoggedUser();
  return (
    <MainContainer>
      <div className="text-sm lg:text-md">
        <h1 className="pb-4 text-start text-2xl tracking-wider">
          Witaj,{" "}
          <span className="font-bold uppercase text-accentColor2">
            {user?.user_metadata.userName}
          </span>
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-2">
          <p className=" self-start  bg-slate-800 px-2 py-1 font-semibold tracking-wide">
            {TODAY_DAY.toLocaleString(DateTime.DATE_HUGE)}
          </p>
          <FilterPanel />
        </div>
      </div>
      <div className=" flex  flex-col xl:grid grid-cols-6 gap-10 ">
        <HomePageBookingsContainer />
        <PurchasedMembershipsStats />
      </div>
      <div className="flex flex-col lg:grid grid-cols-2 gap-10">
        <PersonalTrainersStats />
        <GroupActivitiesTrainersStats />
      </div>
      <PaymentsStats />
    </MainContainer>
  );
}

export default Home;
