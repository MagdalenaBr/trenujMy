import Modal from "../../ui/Modal";
import AddPaymentForm from "./AddPaymentForm";

export default function AddPaymentModal({children}: {children:React.ReactNode}) {
  return (
    <Modal>
      <Modal.Window formName="payment">
        <AddPaymentForm/>
      </Modal.Window>
      <Modal.OpenButton openForm="payment">
        {children}
      </Modal.OpenButton>
    </Modal>
  );
}