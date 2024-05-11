import Modal from "../../ui/Modal";
import AddPaymentForm from "./AddPaymentForm";
import Button from "../../ui/Button";
import { HiPlus } from "react-icons/hi2";

export default function AddPaymentModal({
  isMemberPage,
  activeMemberData,
}: {
  isMemberPage?: boolean;
  activeMemberData?: {
    id: string;
    city: string;
    email: string;
    gender: string;
    name: string;
    phone: string;
  };
}) {
  return (
    <Modal>
      <Modal.Window formName="payment">
        <AddPaymentForm
          isMemberPage={isMemberPage}
          activeMemberData={activeMemberData}
        />
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
