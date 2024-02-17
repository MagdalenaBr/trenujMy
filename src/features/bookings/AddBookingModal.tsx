import Modal from "../../ui/Modal";
import AddBookingForm from "./AddBookingForm";
import StyledButton from "../../ui/StyledButton";

function AddBookingModal({ children, booking }) {
	return (
		<Modal>
			<Modal.Window formName='member'>
				<AddBookingForm booking={booking}/>
			</Modal.Window>
			<Modal.OpenButton openForm='member'>
				{/* <StyledButton styleType='add'>Dodaj rezerwację</StyledButton> */}
				{children}
			</Modal.OpenButton>
		</Modal>
	);
}
export default AddBookingModal;
