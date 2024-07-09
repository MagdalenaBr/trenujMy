import AddMemberForm from "./AddMemberForm";
import Modal from "../../ui/Modal";
import FormButton from "../../ui/FormButton";

function AddMemberModal() {
  return (
    <Modal>
      <Modal.Window formName="member">
        <AddMemberForm />
      </Modal.Window>
      <Modal.OpenButton openForm="member">
        <FormButton>Dodaj klienta</FormButton>
      </Modal.OpenButton>
    </Modal>
  );
}

export default AddMemberModal;
