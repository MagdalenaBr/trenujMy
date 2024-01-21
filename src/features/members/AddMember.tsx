import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import AddMemberForm from "./AddMemberForm";

function AddMember() {
	return (
		<Modal>
			<Modal.Window formName='member'>
				<AddMemberForm />
			</Modal.Window>
			<Modal.OpenButton openForm='member'>
				<Button styleType='add'>Dodaj klienta</Button>
			</Modal.OpenButton>
		</Modal>
	);
}

export default AddMember;
