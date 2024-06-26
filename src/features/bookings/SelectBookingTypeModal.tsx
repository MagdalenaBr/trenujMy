import Modal from "../../ui/Modal";
import SelectBookingType from "./SelectBookingType";

function SelectBookingTypeModal({children, memberId}: {children: React.ReactNode, memberId: string}) {
  return (
    <Modal>
      <Modal.Window formName="booking">
        <SelectBookingType memberId={memberId} />
      </Modal.Window>
      <Modal.OpenButton openForm="booking">{children}</Modal.OpenButton>
    </Modal>
  );
}
export default SelectBookingTypeModal;
