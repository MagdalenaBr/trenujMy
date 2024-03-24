import Modal from "../../ui/Modal";
import CreateScheduleForm from "./CreateScheduleForm";

interface ClassesType {
	children: React.ReactNode;
	classes?: {
		created_at: string;
		date: string;
		id: number;
		numOfPlaces: number;
		name: string;
		trainerId: number;
		trainers: {
			name: string;
		};
	};
}

function CreateScheduleModal({ children, classes }: ClassesType) {
	return (
		<Modal>
			<Modal.Window formName='schedule'>
				<CreateScheduleForm classes={classes} />
			</Modal.Window>
			<Modal.OpenButton openForm='schedule'>{children}</Modal.OpenButton>
		</Modal>
	);
}

export default CreateScheduleModal;
