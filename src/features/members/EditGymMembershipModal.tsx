import { HiOutlinePencil } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import GymMembershipForm from "./GymMembershipForm";
import Button from "../../ui/Button";

type MemberType = {
		id?: number;
		email: string;
		name: string;
		phone: string;
		gender: string;
		city: string;
		startGymMembership?: string | null;
		endGymMembership?: string | null;
		gymMembershipType?: string | null;
	
};

function EditGymMembershipModal({ member }: {member: MemberType}) {

	return (
		<Modal>
			<Modal.OpenButton openForm='membership'>
				<Button>
					<HiOutlinePencil className='text-lg cursor-pointer text-red-800 hover:scale-125 active:scale-125 transition' />
				</Button>
			</Modal.OpenButton>
			<Modal.Window formName='membership'>
				<GymMembershipForm member={member} />
			</Modal.Window>
		</Modal>
	);
}

export default EditGymMembershipModal;
