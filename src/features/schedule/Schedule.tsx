/* eslint-disable no-mixed-spaces-and-tabs */
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useOpenHours } from "./useOpenHours";
import Spinner from "../../ui/Spinner";

interface ScheduleDataTypes {
	date: string;
	title: string;
	url?: string;
}

function Schedule({
	trainerSchedule,
}: {
	trainerSchedule: ScheduleDataTypes[];
}) {
	const { openHours, isLoading: openHoursLoading } = useOpenHours();

	if (openHoursLoading) return <Spinner />;
	let openHour, closeHour;
	if (openHours !== undefined) ({ openHour, closeHour } = openHours[0]);

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
