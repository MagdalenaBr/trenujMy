import Modal from "../../ui/Modal";
import CreateScheduleForm from "./CreateScheduleForm";
import FormButton from "../../ui/FormButton";

interface ClassesType {
	classes?: {
		created_at: string;
		date: string;
		id: string;
		numOfPlaces: number;
		name: string;
		trainerId: string;
		trainers: {
			name: string;
			category: string;
		};
	};
}

function CreateScheduleModal({ classes }: ClassesType) {
	return (
		<Modal>
			<Modal.Window formName='schedule'>
				<CreateScheduleForm classes={classes} />
			</Modal.Window>
			<Modal.OpenButton openForm='schedule'>
			<FormButton>Dodaj zajęcia</FormButton>
			</Modal.OpenButton>
		</Modal>
	);
}

export default CreateScheduleModal;
