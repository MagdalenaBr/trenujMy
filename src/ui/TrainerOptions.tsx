import { Link } from "react-router-dom";
import {
	HiOutlinePencil,
	HiOutlineCalendar,
	HiOutlineTrash,
} from "react-icons/hi2";
import { deleteTrainer } from "../services/apiTrainers";
import { useDeleteTrainer } from "../features/trainer/useDeleteTrainer";

function TrainerOptions({ id }) {
	const { deleteOneTrainer } = useDeleteTrainer();
	function handleClick(id) {
		console.log(id);
		deleteOneTrainer(id);
	}
	return (
		<div className='flex gap-1 text-2xl justify-self-end px-5  text-violet-800'>
			<Link to={`/trainers/${id}`}>
				<HiOutlineCalendar />
			</Link>
			<HiOutlinePencil />
			<button onClick={()=>handleClick(id)}>
				<HiOutlineTrash />
			</button>
		</div>
	);
}
export default TrainerOptions;
