import { HiOutlinePencil } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import GymMembershipForm from "./GymMembershipForm";
import Button from "../../ui/Button";


interface MemberTypes {
	id: number;
	city: string;
	email: string;
	endGymMembership: string;
	gender: string;
	gymMembershipType: string;
	name: string;
	phone: string;
	startGymMembership: string;
}
function EditGymMembershipModal({ member }: {member: MemberTypes}) {
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
