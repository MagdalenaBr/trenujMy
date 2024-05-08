import Modal from "../../ui/Modal";
import CreateScheduleForm from "./CreateScheduleForm";

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
	children: React.ReactNode
}

function CreateScheduleModal({ classes, children }: ClassesType) {
	return (
		<Modal>
			<Modal.Window formName='schedule'>
				<CreateScheduleForm classes={classes} />
			</Modal.Window>
			<Modal.OpenButton openForm='schedule'>
			{children}
			</Modal.OpenButton>
		</Modal>
	);
}

export default CreateScheduleModal;
