import { useParams } from "react-router-dom";
import Container from "../../ui/Container";
import StyledButton from "../../ui/StyledButton";
import Schedule from "../schedule/Schedule";
import BackButton from "../../ui/BackButton";
import { useTrainers } from "./useTrainers";
import { useSchedules } from "../schedule/useSchedules";
import { useBooking } from "../bookings/useBooking";

function TrainerPage() {
	const trainerIdParams = useParams();
	const trainerId = Number(trainerIdParams.trainerId);
	const { trainers } = useTrainers();
	const trainer = trainers?.find(t => t.id === trainerId);

	const { schedule } = useSchedules();
	const { booking } = useBooking(trainer?.id);

	if (trainer === undefined) return;
	let trainerSchedule;
	if (trainer.category !== "trener personalny")
		trainerSchedule = schedule?.map(el =>
			el.trainerId === trainer.id
				? {
						title: `${el.name} ${booking?.length}/${el.numOfPlaces}`,
						date: el.date,
				  }
				: {}
		);
	if (trainer.category === "trener personalny")
		trainerSchedule = booking?.map(el =>
			el.trainerId === trainer.id
				? {
						title: `${el.members.name} ${el.members.phone}`,
						date: el.date,
				  }
				: {}
		);

	return (
		<Container>
			<div className='flex gap-5'>
				<img src={trainer.image} alt='' className='w-96 h-96 object-cover' />
				<div className='flex flex-col w-[100%]'>
					<BackButton />
					<div className='flex flex-col gap-5 self-start'>
						<h2 className='text-2xl font-bold'>{trainer.name}</h2>
						<div className='flex gap-2'>
							<h3 className='font-semibold'>Kategoria:</h3>
							<span>{trainer.category}</span>
						</div>
						<div className='flex gap-2'>
							<h3 className='font-semibold'>Telefon:</h3>
							<span>{trainer.phone}</span>
						</div>
						<div className='flex gap-2'>
							<h3 className='font-semibold'>Cena:</h3>
							<span>{trainer.price} zł</span>
						</div>
					</div>
				</div>
			</div>
			<StyledButton styleType='add'>Zarezerwuj trenera</StyledButton>
			<Schedule trainerSchedule={trainerSchedule} trainerCategory={trainer.category}/>
		</Container>
	);
}

export default TrainerPage;
