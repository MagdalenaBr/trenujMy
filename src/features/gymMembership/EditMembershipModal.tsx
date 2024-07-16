import { HiPlus } from "react-icons/hi2";
import EditGymMembershipTypesForm from "./EditGymMembershipTypesForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

export default function EditMembershipModal() {
  return (
    <Modal>
      <Modal.Window formName="gymMembership">
        <EditGymMembershipTypesForm />
      </Modal.Window>
      <Modal.OpenButton openForm="gymMembership">
        <Button styles=" mx-2 my-1">
          <div className="flex items-start gap-2 text-iconsColor">
            <HiPlus className="text-3xl " />
            <span className="text-lg uppercase tracking-wide">
              Edytuj
            </span>
          </div>
        </Button>
      </Modal.OpenButton>
    </Modal>
  );
}
