/* eslint-disable no-mixed-spaces-and-tabs */
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useSchedules } from "./useSchedules";
import { useBooking } from "../bookings/useBooking";

// type TrainerType = {
// 	trainer: {
// 		id?: number;
// 		name: string;
// 		category: string;
// 		price: string;
// 		phone: string;
// 		image: any;
// 	};
// };

function Schedule({ trainerSchedule, trainerCategory }) {
	return (
		<FullCalendar
			plugins={[timeGridPlugin]}
			initialView='timeGridWeek'
			events={trainerSchedule}
			locale='pl'
			eventMinHeight={trainerCategory === "trener personalny" ? 65 : 15}
			slotMinTime={"08:00:00"}
			slotMaxTime={"21:00:00"}
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
