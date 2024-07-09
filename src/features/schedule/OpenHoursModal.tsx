import ChangeOpenHoursButton from "./ChangeOpenHoursButton";
import OpenHoursForm from "./OpenHoursForm";
import Modal from "../../ui/Modal";

function OpenHoursModal() {
  return (
    <Modal>
      <Modal.Window formName="hours">
        <OpenHoursForm />
      </Modal.Window>
      <Modal.OpenButton openForm="hours">
        <ChangeOpenHoursButton />
      </Modal.OpenButton>
    </Modal>
  );
}

export default OpenHoursModal;
