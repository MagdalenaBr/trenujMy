import Schedule from "../features/schedule/Schedule";
import CreateScheduleModal from "../features/schedule/CreateScheduleModal";
import OpenHoursModal from "../features/schedule/OpenHoursModal";
import MainContainer from "../ui/MainContainer";
import EditScheduleLink from "../ui/EditScheduleLink";
import FormButton from "../ui/FormButton";

function SchedulePage() {
  return (
    <MainContainer
      title="Grafik"
      buttons={
        <div className=" flex flex-col items-end gap-1 text-[10px] text-primaryTextColor lg:mb-4 lg:flex-row lg:items-center lg:gap-3 xl:text-sm">
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
