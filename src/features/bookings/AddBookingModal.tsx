import Modal from "../../ui/Modal";
import AddBookingForm from "./AddBookingForm";
import { useTrainer } from "../trainer/useTrainer";
import { useMember } from "../members/useMember";

function AddBookingModal({ children, booking }) {
	const trainerId = booking?.trainerId;
	const memberId = booking?.memberId;
	const { selectedTrainer } = useTrainer(trainerId);
	const { selectedMember } = useMember(memberId);
	const trainerName = selectedTrainer?.name;
	const memberName = selectedMember?.name;

	const changedIdToNameBookingData = {
		...booking,
		trainerId: trainerName,
		memberId: memberName,
	};

	return (
		<Modal>
			<Modal.Window formName='member'>
				<AddBookingForm
					booking={booking}
					changedBookingData={changedIdToNameBookingData}
				/>
			</Modal.Window>
			<Modal.OpenButton openForm='member'>{children}</Modal.OpenButton>
		</Modal>
	);
}
export default AddBookingModal;
