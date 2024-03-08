import Schedule from "../features/schedule/Schedule";
import { useSchedules } from "../features/schedule/useSchedules";
import MainContainer from "../ui/MainContainer";
import OpenHoursModal from "../features/schedule/OpenHoursModal";
import CreateScheduleModal from "../features/schedule/CreateScheduleModal";
import { Link } from "react-router-dom";
import StyledButton from "../ui/StyledButton";
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
			<div className="w-full flex justify-end">
				<Link
					to='edit-schedule'
					className='uppercase text-cyan-800 border-cyan-800 border-2 px-2 py-1 mb-7 rounded-md font-bold'>
					Edytuj grafik
				</Link>
			</div>
			<Schedule trainerSchedule={trainerSchedule} />
			<CreateScheduleModal>
				<StyledButton>Dodaj zajęcia</StyledButton>
			</CreateScheduleModal>
		</MainContainer>
	);
}

export default SchedulePage;
