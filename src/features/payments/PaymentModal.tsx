import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import { HiPlus } from "react-icons/hi2";
import PaymentForm from "./PaymentForm";

export default function PaymentModal() {
  return (
    <Modal>
      <Modal.Window formName="payment">
        <PaymentForm/>
      </Modal.Window>
      <Modal.OpenButton openForm="payment">
        <Button styles=" mx-2 my-1">
          <div className="flex items-center gap-2">
            <HiPlus className="text-3xl text-accentColor2 " />
            <span className="text-lg uppercase tracking-wide text-accentColor2">
              Dodaj
            </span>
          </div>
        </Button>
      </Modal.OpenButton>
    </Modal>
  );
}
