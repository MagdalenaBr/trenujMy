import { HiOutlinePencil } from "react-icons/hi2";
import { useSchedules } from "./useSchedules";
import MainContainer from "../../ui/MainContainer";
import CreateScheduleModal from "./CreateScheduleModal";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import TableWithSpacing from "../../ui/TableWithSpacing";
import BackButton from "../../ui/BackButton";

export default function ScheduleList() {
	const { schedule, scheduleIsLoading } = useSchedules();
	if (scheduleIsLoading) return <Spinner />;

	return (
		<MainContainer title='Aktualny grafik'>
			<BackButton/>
			<TableWithSpacing columns='grid-cols-[repeat(4,minmax(100px,_1fr))_100px]'>
				<TableWithSpacing.Header>
					<p>Trener</p>
					<p>Kategoria</p>
					<p>Data</p>
					<p>Dostępne miejsca</p>
				</TableWithSpacing.Header>
				{schedule?.map(el => (
					<TableWithSpacing.Row key={el.id}>
						<p className='font-bold  text-slate-700 text-start'>
							{el.trainers.name}
						</p>
						<p>{el.name}</p>
						<div>
							<p>{el.date.slice(0, -3).split("T")[0]}</p>
							<p className='text-slate-600 text-sm'>
								{el.date.slice(0, -3).split("T")[1]}
							</p>
						</div>
						<p>{el.numOfPlaces}</p>
						<CreateScheduleModal classes={el}>
							<Button>
								<HiOutlinePencil className='text-2xl' />
							</Button>
						</CreateScheduleModal>
					</TableWithSpacing.Row>
				))}
			</TableWithSpacing>
		</MainContainer>
	);
}
