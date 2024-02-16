import Modal from "../../ui/Modal";
import AddBookingForm from "./AddBookingForm";
import StyledButton from "../../ui/StyledButton";


function AddBooking() {
    return (
		<Modal>
			<Modal.Window formName='member'>
				<AddBookingForm/>
			</Modal.Window>
			<Modal.OpenButton openForm='member'>
				<StyledButton styleType='add'>Dodaj rezerwację</StyledButton>
			</Modal.OpenButton>
		</Modal>
	);
}
export default AddBooking