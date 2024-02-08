import { useParams } from "react-router-dom";
import Container from "../../ui/Container";
import StyledButton from "../../ui/StyledButton";
import Schedule from "../schedule/Schedule";
import BackButton from "../../ui/BackButton";
import { useTrainer } from "./useTrainer";

function TrainerPage() {
	const trainerIdParams = useParams();
	const trainerId = Number(trainerIdParams.trainerId);
	const { trainers } = useTrainer();
	const trainer = trainers?.filter(t => t.id === trainerId);

	if (trainer === undefined) return;

	return (
		<Container>
			<div className='flex gap-5'>
				<img src={trainer[0].image} alt='' className='w-96 h-96 object-cover' />
				<div className='flex flex-col w-[100%]'>
					<BackButton />
					<div className='flex flex-col gap-5 self-start'>
						<h2 className='text-2xl font-bold'>{trainer[0].name}</h2>
						<div className='flex gap-2'>
							<h3 className='font-semibold'>Kategoria:</h3>
							<span>{trainer[0].category}</span>
						</div>
						<div className='flex gap-2'>
							<h3 className='font-semibold'>Telefon:</h3>
							<span>{trainer[0].phone}</span>
						</div>
						<div className='flex gap-2'>
							<h3 className='font-semibold'>Cena:</h3>
							<span>{trainer[0].price} zł</span>
						</div>
					</div>
				</div>
			</div>
			<StyledButton styleType='add'>Zarezerwuj trenera</StyledButton>
			<Schedule />
		</Container>
	);
}

export default TrainerPage;
