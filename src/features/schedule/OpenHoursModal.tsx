import Modal from "../../ui/Modal";
import ChangeOpenHours from "./ChangeOpenHours";
import OpenHoursForm from "./OpenHoursForm";

function OpenHoursModal() {
	return (
		<Modal>
			<Modal.Window formName='hours'>
				<OpenHoursForm />
			</Modal.Window>
			<Modal.OpenButton openForm='hours'>
				<ChangeOpenHours />
			</Modal.OpenButton>
		</Modal>
	);
}

export default OpenHoursModal;
