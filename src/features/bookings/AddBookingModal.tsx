import AddBookingForm from "./AddBookingForm";
import Modal from "../../ui/Modal";
import { BookingsDataType } from "../../types/bookingTypes";
interface PropsTypes {
  children: React.ReactNode;
  booking?: BookingsDataType;
  memberId: string;
  typeOfActivities?: string;
  closeSelectModal?: () => void;
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
