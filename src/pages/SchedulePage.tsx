import Schedule from "../features/schedule/Schedule";
import { useSchedules } from "../features/schedule/useSchedules";
import MainContainer from "../ui/MainContainer";
import OpenHoursModal from "../features/schedule/OpenHoursModal";


type ScheduleDataTypes = {
	date: string;
	title: string;
	url?: string;
}[];

function SchedulePage() {
	const { schedule } = useSchedules();
	if (!schedule) return;
	
	const trainerSchedule: ScheduleDataTypes = schedule.map(el => ({
		title: `${el.name} ${el.trainers.name}`,
		date: el.date,
		url: `/trainers/${el.trainerId}`,
	}));

	return (
		<MainContainer title='Grafik' button={<OpenHoursModal />}>
			<Schedule trainerSchedule={trainerSchedule} />
		</MainContainer>
	);
}

export default SchedulePage;
