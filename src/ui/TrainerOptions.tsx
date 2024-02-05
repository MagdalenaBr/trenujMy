import { Link } from "react-router-dom";
import {
	HiOutlinePencil,
	HiOutlineCalendar,
	HiOutlineTrash,
} from "react-icons/hi2";

import { useDeleteTrainer } from "../features/trainer/useDeleteTrainer";
import Modal from "./Modal";
import AddTrainerForm from "../features/trainer/AddTrainerForm";

import Button from "./Button";
import DeletePopup from "./DeletePopup";

type TrainerTypes = {
	trainer: {
		id?: number;
		name: string;
		category: string;
		price: string;
		phone: string;
		image: any;
	};
};

function TrainerOptions({ trainer }: TrainerTypes) {
	const id = trainer?.id;
	const { deleteOneTrainer } = useDeleteTrainer();
	if (!id) return null;
	return (
		<div className='flex gap-1 text-2xl justify-self-end px-5  text-slate-800'>
			<Link to={`/trainers/${id}`}>
				<HiOutlineCalendar />
			</Link>
			<Modal>
				<Modal.OpenButton openForm='trainer'>
					<Button>
						<HiOutlinePencil />
					</Button>
				</Modal.OpenButton>
				<Modal.Window formName='trainer'>
					<AddTrainerForm trainer={trainer} />
				</Modal.Window>

				<Modal.OpenButton openForm='delete'>
					<Button>
						<HiOutlineTrash />
					</Button>
				</Modal.OpenButton>
				<Modal.Window formName='delete'>
					<DeletePopup handleDeleteItem={() => deleteOneTrainer(id)} />
				</Modal.Window>
			</Modal>
		</div>
	);
}
export default TrainerOptions;
