/* eslint-disable no-mixed-spaces-and-tabs */
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useSchedules } from "./useSchedules";
import { useBookings } from "../bookings/useBookings";
import { useBooking } from "../bookings/useBooking";
import { BsCloudLightning } from "react-icons/bs";

type TrainerType = {
	trainer: {
		id?: number;
		name: string;
		category: string;
		price: string;
		phone: string;
		image: any;
	};
};

function Schedule({ trainer }: TrainerType) {
	const { schedule } = useSchedules();

	const { bookings } = useBookings();

	const { booking } = useBooking(trainer.id);
	console.log(schedule);
	console.log(trainer.id);

	let trainerSchedule;
	if (trainer.category !== "trener personalny")
		trainerSchedule = schedule?.map(el =>
			el.trainerId === trainer.id
				? {
						title: `${el.name} 1/${el.numOfPlaces}`,
						date: el.date,
				  }
				: {}
		);
	if (trainer.category === "trener personalny")
		trainerSchedule = booking?.map(el =>
			el.trainerId === trainer.id
				? {
						title: el.members.name,
						date: el.date,
				  }
				: {}
		);

	return (
		<FullCalendar
			plugins={[timeGridPlugin]}
			initialView='timeGridWeek'
			events={trainerSchedule}
			locale='pl'
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
