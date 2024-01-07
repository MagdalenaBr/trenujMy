import { useContext } from "react";
import TrainerOptions from "../../ui/TrainerOptions";
import AddTrainerForm from "./AddTrainerForm";
import { ShowFormContext } from "../../pages/Trainers";

function TrainerRow({trainer}) {
    const { showForm, setShowForm } = useContext(ShowFormContext);
	return <>
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
		{showForm && <AddTrainerForm trainer={trainer} />}
	</>;
}
export default TrainerRow;
