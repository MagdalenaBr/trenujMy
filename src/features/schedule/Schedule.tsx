/* eslint-disable no-mixed-spaces-and-tabs */
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useOpenHours } from "./useOpenHours";
import Spinner from "../../ui/Spinner";

function Schedule({ trainerSchedule, scheduleIsLoading }) {
	const { openHours, isLoading: openHoursLoading } = useOpenHours();
	// const defaultHours = {openHour: '00:00', closeHour: '24:00'}
	if (openHoursLoading || scheduleIsLoading) return <Spinner />;
	let openHour, closeHour;
	if (openHours !== undefined) ({ openHour, closeHour } = openHours[0]);

	console.log(openHour, closeHour);
	return (
		<FullCalendar
			plugins={[timeGridPlugin]}
			initialView='timeGridWeek'
			events={trainerSchedule}
			locale='pl'
			eventMinHeight={65}
			slotMinTime={openHour || "00:00"}
			slotMaxTime={closeHour || "24:00"}
			headerToolbar={{
				start: "timeGridWeek,timeGridDay",
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
	);
}

export default Schedule;
