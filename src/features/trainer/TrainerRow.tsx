import TrainerOptions from "./TrainerOptions";

interface TrainersDataTypes {
	id: number;
	image: string;
	name: string;
	phone: string;
	price: number;
	category: string;
	created_at: string;
}


function TrainerRow({ trainer }: {trainer: TrainersDataTypes}) {
	console.log(trainer);
	return (
		<>
			<div className='col-[1_/_2] flex items-center gap-3 '>
				<img
					src={trainer.image}
					alt='trener'
					className='h-28 w-20 object-cover'
				/>
				<h2>{trainer.name}</h2>
			</div>
			<p>{trainer.category}</p>
			<p>{trainer.price} zł</p>
			<TrainerOptions trainer={trainer} />
		</>
	);
}
export default TrainerRow;
