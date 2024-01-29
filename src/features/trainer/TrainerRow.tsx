import TrainerOptions from "../../ui/TrainerOptions";

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

function TrainerRow({ trainer }: TrainerType) {
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
