import Modal from "../../ui/Modal";
import StyledButton from "../../ui/StyledButton";
import CreateScheduleForm from "./CreateScheduleForm";

function CreateScheduleModal() {
	return (
		<Modal>
			<Modal.Window formName='schedule'>
				<CreateScheduleForm />
			</Modal.Window>
			<Modal.OpenButton openForm='schedule'>
				<StyledButton>Dodaj zajęcia</StyledButton>
			</Modal.OpenButton>
		</Modal>
	);
}

export default CreateScheduleModal;
