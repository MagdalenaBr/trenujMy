import AddBookingForm from "./AddBookingForm";
import Modal from "../../ui/Modal";

type PropsType = {
	children: React.ReactNode;
	booking: {
		id?: number;
		date: Date;
		status: string;
		trainerId: number;
		memberId: number;
	};
};

function AddBookingModal({ children, booking }: PropsType) {
	return (
		<Modal>
			<Modal.Window formName='member'>
				<AddBookingForm booking={booking} />
			</Modal.Window>
			<Modal.OpenButton openForm='member'>{children}</Modal.OpenButton>
		</Modal>
	);
}
export default AddBookingModal;
