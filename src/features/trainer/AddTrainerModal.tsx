import AddTrainerForm from "./AddTrainerForm";
import Modal from "../../ui/Modal";
import FormButton from "../../ui/FormButton";

export default function AddTrainerModal() {
  return (
    <Modal>
      <Modal.Window formName="trainer">
        <AddTrainerForm />
      </Modal.Window>
      <Modal.OpenButton openForm="trainer">
        <FormButton>Dodaj trenera</FormButton>
      </Modal.OpenButton>
    </Modal>
  );
}
