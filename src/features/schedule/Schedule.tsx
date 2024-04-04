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
	console.log(trainerSchedule);

	return (
		<div className="bg-slate-400">

			<FullCalendar
				plugins={[timeGridPlugin]}
				initialView='timeGridWeek'
				events={[
					{ title: 'event 1', date: '2024-04-01' },
					{ title: 'event 2', date: '2024-04-02' }
				  ]}
				
				eventColor={"#5C526E"}
				eventBorderColor={"#475569"}
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
		</div>
	);
}

export default Schedule;
