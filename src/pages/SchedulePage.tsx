import Schedule from "../features/schedule/Schedule";
import MainContainer from "../ui/MainContainer";
import OpenHoursModal from "../features/schedule/OpenHoursModal";
import CreateScheduleModal from "../features/schedule/CreateScheduleModal";
import EditScheduleLink from "../ui/EditScheduleLink";
import FormButton from "../ui/FormButton";
function SchedulePage() {
  return (
    <MainContainer
      title="Grafik"
      buttons={
        <div className=" lg:mb-4 text-[10px] xl:text-sm flex flex-col lg:flex-row items-end lg:items-center gap-1 lg:gap-3 text-primaryTextColor">
          <CreateScheduleModal>
            <FormButton>Dodaj zajęcia</FormButton>
          </CreateScheduleModal>
          <OpenHoursModal />
          <EditScheduleLink />
        </div>
      }
    >
      <Schedule page="schedulePage" />
    </MainContainer>
  );
}

export default SchedulePage;
