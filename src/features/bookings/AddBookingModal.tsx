import AddBookingForm from "./AddBookingForm";
import Modal from "../../ui/Modal";



interface BookingTypes {
	status: string;
	trainerId: string;
	memberId: string;
	date: string;
	created_at: string;
	id: string;
	trainers: {
		name: string;
		category: string;
	};
	members: {
		name: string;
		phone: string;
	};
}

interface PropsTypes {
	children: React.ReactNode;
	booking?: BookingTypes;
	memberId: string
	memberName: string
}


function AddBookingModal({
	children,
	booking,
	memberId,
	memberName,
}: PropsTypes) {
	return (
		<Modal>
			<Modal.Window formName='member'>
				<AddBookingForm
					booking={booking}
					memberIdNumber={memberId}
					memberName={memberName}
				/>
			</Modal.Window>
			<Modal.OpenButton openForm='member'>{children}</Modal.OpenButton>
		</Modal>
	);
}
export default AddBookingModal;
