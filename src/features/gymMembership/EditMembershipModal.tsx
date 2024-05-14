import Modal from "../../ui/Modal";
import EditGymMembershipForm from "./EditGymMembershipForm";
import Button from "../../ui/Button";
import { HiPlus } from "react-icons/hi2";

export default function EditMembershipModal() {
  return (
    <Modal>
      <Modal.Window formName="gymMembership">
        <EditGymMembershipForm />
      </Modal.Window>
      <Modal.OpenButton openForm="gymMembership">
        
        <Button styles=" mx-2 my-1">
          <div className="flex items-start gap-2">
            <HiPlus className="text-3xl text-accentColor2 " />
            <span className="text-lg uppercase tracking-wide text-accentColor2">
             Edytuj
            </span>
          </div>
        </Button>
   
      </Modal.OpenButton>
    </Modal>
  );
}
