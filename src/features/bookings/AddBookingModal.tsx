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
  memberId: string;
  typeOfActivities?: string;
  closeSelectModal?:  () => void
}

function AddBookingModal({
  children,
  booking,
  memberId,
  typeOfActivities,
  closeSelectModal,
}: PropsTypes) {
  return (
    <Modal>
      <Modal.Window formName={typeOfActivities}>
        <AddBookingForm
          booking={booking}
          memberIdNumber={memberId}
          closeSelectModal={closeSelectModal}
          typeOfActivities={typeOfActivities as string}
        />
      </Modal.Window>
      <Modal.OpenButton openForm={typeOfActivities}>
        {children}
      </Modal.OpenButton>
    </Modal>
  );
}
export default AddBookingModal;
