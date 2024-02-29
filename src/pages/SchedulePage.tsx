import Schedule from "../features/schedule/Schedule";
import { useSchedules } from "../features/schedule/useSchedules";
import MainContainer from "../ui/MainContainer";
import ChangeOpenHours from "../features/schedule/ChangeOpenHours";
import OpenHoursModal from "../features/schedule/OpenHoursModal";
import Spinner from "../ui/Spinner";

function SchedulePage() {
	const { schedule, scheduleIsLoading } = useSchedules();

	// if (scheduleIsLoading) return <Spinner />;

	const trainerSchedule = schedule?.map(el => ({
		title: `${el.name} ${el.trainers.name}`,
		date: el.date,
		url: `/trainers/${el.trainerId}`,
	}));

	return (
		<MainContainer title='Grafik' button={<OpenHoursModal />}>
			<Schedule trainerSchedule={trainerSchedule} scheduleIsLoading={scheduleIsLoading}/>
		</MainContainer>
	);
}

export default SchedulePage;
