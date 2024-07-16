import { DateTime } from "luxon";
import { TODAY_DAY } from "../utils/constants";
import useLoggedUser from "../features/authentication/useLoggedUser";
import PurchasedMembershipsStats from "../features/homePage/PurchasedMembershipsStats";
import HomePageBookingsContainer from "../features/homePage/HomePageBookingsContainer";
import PersonalTrainersStats from "../features/homePage/PersonalTrainersStats";
import { GroupActivitiesTrainersStats } from "../features/homePage/GroupActivitiesTrainersStats";
import PaymentsStats from "../features/homePage/PaymentsStats";
import FilterPanel from "../ui/FilterPanel";
import MainContainer from "../ui/MainContainer";

function Home() {
  const { user } = useLoggedUser();
  return (
    <MainContainer>
      <div className="lg:text-md text-sm">
        <h1 className="pb-4 text-start text-2xl tracking-wider text-textLightMode">
          Witaj,{" "}
          <span className="font-bold uppercase text-accentColor2">
            {user?.user_metadata.userName}
          </span>
        </h1>
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          <p className=" self-start text-textMedium bg-slate-800 px-2 py-1 font-semibold tracking-wide">
            {TODAY_DAY.toLocaleString(DateTime.DATE_HUGE)}
          </p>
          <FilterPanel />
        </div>
      </div>
      <div className=" flex  grid-cols-6 flex-col gap-10 xl:grid ">
        <HomePageBookingsContainer />
        <PurchasedMembershipsStats />
      </div>
      <div className="flex grid-cols-2 flex-col gap-10 lg:grid">
        <PersonalTrainersStats />
        <GroupActivitiesTrainersStats />
      </div>
      <PaymentsStats />
    </MainContainer>
  );
}

export default Home;
