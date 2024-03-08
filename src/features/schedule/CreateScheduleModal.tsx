import Modal from "../../ui/Modal";
import CreateScheduleForm from "./CreateScheduleForm";

type ClassesType = {
	children: React.ReactNode;
	classes?: {
		id?: number;
		name: string;
		numOfPlaces: number;
		trainerId: number;
		date: string;
	};
};

function CreateScheduleModal({ children, classes}: ClassesType) {
	return (
		<Modal>
			<Modal.Window formName='schedule'>
				<CreateScheduleForm classes={classes}/>
			</Modal.Window>
			<Modal.OpenButton openForm='schedule'>
				{children}
			</Modal.OpenButton>
		</Modal>
	);
}

export default CreateScheduleModal;
