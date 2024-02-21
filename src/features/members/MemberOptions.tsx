import AddMemberForm from "./AddMemberForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import DeletePopup from "../../ui/DeletePopup";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { useDeleteMember } from "./useDeleteMember";
import { useNavigate } from "react-router-dom";

type MemberType = {
	member: {
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
};

function MemberOptions({ member }: MemberType) {
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
