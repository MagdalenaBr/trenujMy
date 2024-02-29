import StyledButton from "../../ui/StyledButton";
import Modal from "../../ui/Modal";
import AddMemberForm from "./AddMemberForm";

function AddMemberModal() {
	return (
		<Modal>
			<Modal.Window formName='member'>
				<AddMemberForm />
			</Modal.Window>
			<Modal.OpenButton openForm='member'>
				<StyledButton styleType='add'>Dodaj klienta</StyledButton>
			</Modal.OpenButton>
		</Modal>
	);
}

export default AddMemberModal;
