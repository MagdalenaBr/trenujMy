import { Link } from "react-router-dom";
import {
	HiOutlinePencil,
	HiOutlineCalendar,
	HiOutlineTrash,
} from "react-icons/hi2";
import { useDeleteTrainer } from "../features/trainer/useDeleteTrainer";
import { useContext, useState } from "react";
import { ShowFormContext } from "../pages/Trainers";
import { useEditTrainer } from "../features/trainer/useEditTrainer";
import AddTrainerForm from "../features/trainer/AddTrainerForm";

function TrainerOptions({ trainer}) {
	const [showForm, setShowForm]  = useState(false);
	const id = trainer?.id;
	const { deleteOneTrainer } = useDeleteTrainer();
	
	function handleDelete(id) {
		deleteOneTrainer(id);
	}

	const { editTrainer } = useEditTrainer();

	function handleEdit(id) {
		setShowForm(!showForm);
	}
	// console.log(trainer);
	return (
		<>
			<div className='flex gap-1 text-2xl justify-self-end px-5  text-violet-800'>
				<Link to={`/trainers/${id}`}>
					<HiOutlineCalendar />
				</Link>
				<button onClick={() => handleEdit(id)}>
					<HiOutlinePencil />
				</button>
				<button onClick={() => handleDelete(id)}>
					<HiOutlineTrash />
				</button>
			</div>
			{showForm && <AddTrainerForm trainer={trainer} onCloseForm={()=> setShowForm(false)}/>}
		</>
	);
}
export default TrainerOptions;
