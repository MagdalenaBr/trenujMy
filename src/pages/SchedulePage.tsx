import Schedule from "../features/schedule/Schedule";
import MainContainer from "../ui/MainContainer";
import OpenHoursModal from "../features/schedule/OpenHoursModal";
import CreateScheduleModal from "../features/schedule/CreateScheduleModal";
import StyledButton from "../ui/StyledButton";
import EditScheduleLink from "../ui/EditScheduleLink";
function SchedulePage() {
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
      <Schedule page="schedulePage"/>
      <CreateScheduleModal>
        <StyledButton>Dodaj zajęcia</StyledButton>
      </CreateScheduleModal>
    </MainContainer>
  );
}

export default SchedulePage;
