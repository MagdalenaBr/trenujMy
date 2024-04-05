import Schedule from "../features/schedule/Schedule";
import { useSchedules } from "../features/schedule/useSchedules";
import MainContainer from "../ui/MainContainer";
import OpenHoursModal from "../features/schedule/OpenHoursModal";
import CreateScheduleModal from "../features/schedule/CreateScheduleModal";
import StyledButton from "../ui/StyledButton";
import EditScheduleLink from "../ui/EditScheduleLink";
import Spinner from "../ui/Spinner";
function SchedulePage() {
  const { schedule, scheduleIsLoading } = useSchedules();

  if(scheduleIsLoading) <Spinner/>
  if (!schedule) return;

  const trainerSchedule = schedule.map((el) => ({
    title: `${el.name} ${el.trainers.name.split(' ')[1]}`,
    date: el.date,
    url: `/trenerzy/${el.trainerId}`,
  }));

  return (
    <MainContainer
      title="Grafik"
      buttons={
        <div className="mb-4 flex items-center gap-3 text-primaryTextColor">
          <OpenHoursModal />
          <EditScheduleLink />
        </div>
      }
    >
      <Schedule trainerSchedule={trainerSchedule} page="schedulePage"/>
      <CreateScheduleModal>
        <StyledButton>Dodaj zajęcia</StyledButton>
      </CreateScheduleModal>
    </MainContainer>
  );
}

export default SchedulePage;
