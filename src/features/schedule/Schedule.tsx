/* eslint-disable no-mixed-spaces-and-tabs */
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useOpenHours } from "./useOpenHours";
import Spinner from "../../ui/Spinner";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useSchedules } from "./useSchedules";

// interface ScheduleDataTypes {
//   date: string;
//   title: string;
//   url?: string;
  
// }

function Schedule({
  page,
}: {
  page: string
}) {

  const { schedule, scheduleIsLoading } = useSchedules();
  const { openHours, isLoading: openHoursLoading } = useOpenHours();

  if (openHoursLoading || scheduleIsLoading) return <Spinner />;


  let openHour, closeHour;
  if (openHours !== undefined) ({ openHour, closeHour } = openHours[0]);


  const trainerSchedule = schedule?.map((el) => ({
    title: `${el.name} ${el.trainers.name.split(' ')[1]}`,
    date: el.date,
    url: `/trenerzy/${el.trainerId}`,
  }));

  return (
    <div className=" rounded-lg bg-slate-900/70 p-2 text-slate-300">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView={page === "trainer" ? "timeGridWeek" : "dayGridMonth"}
        events={trainerSchedule}
        eventColor={"rgb(119, 103, 151)"}
        locale="pl"
        height={"39rem"}
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
  );
}

export default Schedule;
