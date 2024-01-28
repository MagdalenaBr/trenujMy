import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import AddTrainerForm from "./AddTrainerForm";

function AddTrainer() {
	return (
		<Modal>
			<Modal.Window formName='trainer'>
				<AddTrainerForm />
			</Modal.Window>
			<Modal.OpenButton openForm='trainer'>
				<Button styleType='add'>Dodaj trenera</Button>
			</Modal.OpenButton>
		</Modal>
	);
}
export default AddTrainer;
