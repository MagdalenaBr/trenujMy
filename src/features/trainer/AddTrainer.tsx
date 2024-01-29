import StyledButton from "../../ui/StyledButton";
import Modal from "../../ui/Modal";
import AddTrainerForm from "./AddTrainerForm";

function AddTrainer() {
	return (
		<Modal>
			<Modal.Window formName='trainer'>
				<AddTrainerForm />
			</Modal.Window>
			<Modal.OpenButton openForm='trainer'>
				<StyledButton styleType='add'>Dodaj trenera</StyledButton>
			</Modal.OpenButton>
		</Modal>
	);
}
export default AddTrainer;
