import { useNavigate, useParams } from "react-router-dom";
import Container from "../../ui/Container";
import { useQuery } from "@tanstack/react-query";
import { getTrainers } from "../../services/apiTrainers";
import Button from "../../ui/Button";
import Schedule from "../schedule/Schedule";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

function TrainerPage() {
	const trainerIdParams = useParams();
	const navigate = useNavigate();

	const trainerId = Number(trainerIdParams.trainerId);
	const trainers = useQuery({
		queryKey: ["trainers"],
		queryFn: getTrainers,
	});
	const trainer = trainers?.data?.filter(t => t.id === trainerId);

	if (trainer === undefined) return;

	function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		navigate(-1);
	}
	return (
		<Container>
			<div className='flex gap-5'>
				<img src={trainer[0].image} alt='' className='w-96 h-96 object-cover' />
				<div className='flex flex-col w-[100%]'>
					<Button styles='self-end mx-4' handleClick={e => onClick(e)}>
						<HiOutlineArrowSmallLeft className='text-2xl' />
					</Button>
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
			<Button styleType='add'>Zarezerwuj trenera</Button>
			<Schedule />
		</Container>
	);
}

export default TrainerPage;
