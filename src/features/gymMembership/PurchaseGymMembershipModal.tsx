import Modal from "../../ui/Modal";
import PurchaseGymMembershipForm from "./PurchaseGymMembershipForm";
import Button from "../../ui/Button";
import { HiPlus } from "react-icons/hi2";

export default function PurchaseGymMembershipModal({
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
        <PurchaseGymMembershipForm
          isMemberPage={isMemberPage}
          activeMemberData={activeMemberData}
        />
      </Modal.Window>
      <Modal.OpenButton openForm="payment">
        <Button styles=" mx-2 my-1">
          <div className="flex items-center gap-2">
            <HiPlus className="md:text-3xl text-accentColor2 " />
            <span className="text-sm md:text-lg uppercase tracking-wide text-accentColor2">
              Dodaj
            </span>
          </div>
        </Button>
      </Modal.OpenButton>
    </Modal>
  );
}
