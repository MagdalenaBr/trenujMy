import { Link } from "react-router-dom";
import {
	HiOutlinePencil,
	HiOutlineCalendar,
	HiOutlineTrash,
} from "react-icons/hi2";

import { useDeleteTrainer } from "./useDeleteTrainer";
import Modal from "../../ui/Modal";
import AddTrainerForm from "./AddTrainerForm";

import Button from "../../ui/Button";
import DeletePopup from "../../ui/DeletePopup";

type TrainerTypes = {
	trainer: {
		id?: number;
		name: string;
		category: string;
		price: number;
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
