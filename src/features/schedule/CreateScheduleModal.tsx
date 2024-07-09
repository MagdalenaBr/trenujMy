import { ScheduleDataTypes } from "../../types/scheduleTypes";
import Modal from "../../ui/Modal";
import CreateScheduleForm from "./CreateScheduleForm";

interface PropsType {
	classes?: ScheduleDataTypes;
	children: React.ReactNode
}

function CreateScheduleModal({ classes, children }: PropsType) {
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
