import { HiPlus } from "react-icons/hi2";
import { ActiveMemberTypes } from "../../types/membersTypes";
import PurchaseGymMembershipForm from "./PurchaseGymMembershipForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

export default function PurchaseGymMembershipModal({
  isMemberPage,
  activeMemberData,
}: {
  isMemberPage?: boolean;
  activeMemberData?: ActiveMemberTypes;
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
          <div className="flex items-center gap-2  text-iconsColor">
            <HiPlus className="md:text-3xl  " />
            <span className="text-sm md:text-lg uppercase tracking-wide ">
              Dodaj
            </span>
          </div>
        </Button>
      </Modal.OpenButton>
    </Modal>
  );
}
