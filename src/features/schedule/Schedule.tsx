/* eslint-disable no-mixed-spaces-and-tabs */
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useOpenHours } from "./useOpenHours";
import Spinner from "../../ui/Spinner";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useSchedules } from "./useSchedules";

function Schedule({
  trainerSchedule,
  page,
}: {
  trainerSchedule?: any;
  page: string;
}) {
  const { schedule, scheduleIsLoading } = useSchedules();
  const { openHours, isLoading: openHoursLoading } = useOpenHours();

  if (openHoursLoading || scheduleIsLoading) return <Spinner />;

  let openHour, closeHour;
  if (openHours !== undefined) ({ openHour, closeHour } = openHours[0]);

  let scheduleData;
  if (page === "trainer") {
    scheduleData = trainerSchedule;
  } else {
    scheduleData = schedule?.map((el) => ({
      title: `${el.trainers.name.split(" ")[1]}: ${el.name}`,
      date: el.date,
      url: `/trenerzy/${el.trainerId}`,
    }));
  }

  return (
    <div className=" overflow-x-scroll bg-slate-900 p-2 lg:overflow-hidden">
      <div className=" w-[40rem] mx-auto lg:w-full">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView={page === "trainer" ? "timeGridWeek" : "dayGridMonth"}
          events={scheduleData}
          eventColor={"rgb(119, 103, 151)"}
          locale="pl"
          height={"37rem"}
          eventMinHeight={65}
          slotMinTime={openHour || "00:00"}
          slotMaxTime={closeHour || "24:00"}
          headerToolbar={{
            start: "dayGridMonth,timeGridWeek,timeGridDay",
            center: "title",
            end: "today prev,next",
          }}
          buttonText={{
            today: "dzisiaj",
            month: "miesiąc",
            week: "tydzień",
            day: "dzień",
            list: "lista",
          }}
          allDaySlot={false}
        />
      </div>
    </div>
  );
}

export default Schedule;
