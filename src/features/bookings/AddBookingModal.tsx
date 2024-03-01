import AddBookingForm from "./AddBookingForm";
import Modal from "../../ui/Modal";

type PropsType = {
	children: React.ReactNode;
	booking?: {
		id?: number;
		date: string;
		status: string;
		trainerId: number;
		memberId: number;
	};
	activeMember?: string;
};

function AddBookingModal({ children, booking, activeMember, memberId, memberName }: PropsType) {
	return (
		<Modal>
			<Modal.Window formName='member'>
				<AddBookingForm booking={booking} activeMember={activeMember} memberId={memberId} memberName={memberName}/>
			</Modal.Window>
			<Modal.OpenButton openForm='member'>{children}</Modal.OpenButton>
		</Modal>
	);
}
export default AddBookingModal;
