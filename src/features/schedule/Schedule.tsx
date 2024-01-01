import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

function Schedule() {
	return (
		<FullCalendar
			plugins={[timeGridPlugin]}
			initialView='timeGridWeek'
			events={[
				{ title: "event 1", date: "2024-01-01 13" },
				{ title: "event 2", date: "2024-01-02" },
			]}
			locale='pl'
			headerToolbar={{
				start: "timeGridWeek,timeGridDay",
				center: "title",
				end: "today prev,next",
			}}
            buttonText={{
                today:    'dzisiaj',
                month:    'miesiąc',
                week:     'tydzień',
                day:      'dzień',
                list:     'lista'
            }}
            allDaySlot= {false}
		/>
	);
}

export default Schedule;
