import { Link } from "react-router-dom";
import { useState } from "react";
import {
	HiOutlinePencil,
	HiOutlineCalendar,
	HiOutlineTrash,
} from "react-icons/hi2";

import { useDeleteTrainer } from "../features/trainer/useDeleteTrainer";

import AddTrainerForm from "../features/trainer/AddTrainerForm";

type TrainerTypes = {
	trainer: {
		id?: number;
		name: string;
		category: string;
		price: string;
		phone: string;
		image: string;
	};
};

function TrainerOptions({ trainer }: TrainerTypes) {
	const [showForm, setShowForm] = useState(false);
	const id = trainer?.id;
	const { deleteOneTrainer } = useDeleteTrainer();
	if (!id) return null;
	return (
		<>
			<div className='flex gap-1 text-2xl justify-self-end px-5  text-slate-800'>
				<Link to={`/trainers/${id}`}>
					<HiOutlineCalendar />
				</Link>
				<button onClick={() => setShowForm(!showForm)}>
					<HiOutlinePencil />
				</button>
				<button onClick={() => deleteOneTrainer(id)}>
					<HiOutlineTrash />
				</button>
			</div>
			{showForm && (
				<AddTrainerForm
					trainer={trainer}
					onCloseForm={() => setShowForm(false)}
				/>
			)}
		</>
	);
}
export default TrainerOptions;
