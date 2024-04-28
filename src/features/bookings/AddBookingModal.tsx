import AddBookingForm from "./AddBookingForm";
import Modal from "../../ui/Modal";



interface BookingTypes {
	status: string;
	trainerId: number;
	memberId: number;
	date: string;
	created_at: string;
	id: number;
	trainers: {
		name: string;
		category: string;
	};
	members: {
		name: string;
		phone: string;
	};
}

interface ActiveMemberType{
		id: number;
		name: string;
		email: string;
		phone: string;
		gender: string;
		city: string;
		startGymMembership?: string | null;
		endGymMembership?: string | null;
		gymMembershipType?: string | null;
}
interface PropsTypes {
	children: React.ReactNode;
	booking?: BookingTypes;
	activeMember?: ActiveMemberType
	memberId?: number
	memberName?: string
}


function AddBookingModal({
	children,
	booking,
	activeMember,
	memberId,
	memberName,
}: PropsTypes) {
	return (
		<Modal>
			<Modal.Window formName='member'>
				<AddBookingForm
					booking={booking}
					activeMember={activeMember}
					memberId={memberId}
					memberName={memberName}
				/>
			</Modal.Window>
			<Modal.OpenButton openForm='member'>{children}</Modal.OpenButton>
		</Modal>
	);
}
export default AddBookingModal;
