import Modal from "../../ui/Modal";
import PaymentForm from "./PaymentForm";
import { HiPlus } from "react-icons/hi2";
import Button from "../../ui/Button";

export default function PaymentModal() {
  return (
    <Modal>
      <Modal.Window formName="payment">
        <PaymentForm />
      </Modal.Window>
      <Modal.OpenButton openForm="payment">
        <Button styles=" mx-2 my-1">
          <div className="flex items-center gap-2  text-iconsColor">
            <HiPlus className=" md:text-2xl " />
            <span className="text-sm uppercase tracking-wide  md:text-lg">
              Dodaj
            </span>
          </div>
        </Button>
      </Modal.OpenButton>
    </Modal>
  );
}
