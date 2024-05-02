import AddMemberForm from "./AddMemberForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import DeletePopup from "../../ui/DeletePopup";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { useDeleteMember } from "./useDeleteMember";
import { useNavigate } from "react-router-dom";

interface MemberTypes {
	city: string;
	email: string;
	gender: string;
	name: string;
	phone: string;
	created_at: string;
	endGymMembership: string;
	gymMembershipType: string;
	id: string;
	startGymMembership: string;
}

function MemberOptions({ member }: { member: MemberTypes }) {
	const navigate = useNavigate();
	const { deleteOneMember } = useDeleteMember();
	return (
		<div className='flex gap-3 text-3xl px-5  text-red-800'>
			<Modal>
				<Modal.OpenButton openForm='member'>
					<Button>
						<HiOutlinePencil />
					</Button>
				</Modal.OpenButton>
				<Modal.Window formName='member'>
					<AddMemberForm member={member} />
				</Modal.Window>

				<Modal.OpenButton openForm='delete'>
					<Button>
						<HiOutlineTrash />
					</Button>
				</Modal.OpenButton>
				<Modal.Window formName='delete'>
					<DeletePopup
						handleDeleteItem={() => {
							deleteOneMember(member.id);
							navigate(-1);
						}}
					/>
				</Modal.Window>
			</Modal>
		</div>
	);
}

export default MemberOptions;
