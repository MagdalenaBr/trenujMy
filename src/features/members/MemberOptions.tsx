import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useDeleteMember } from "./useDeleteMember";
import { MembersType } from "../../types/membersTypes";
import AddMemberForm from "./AddMemberForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import DeletePopup from "../../ui/DeletePopup";

function MemberOptions({ member }: { member: MembersType }) {
  const navigate = useNavigate();
  const { deleteOneMember } = useDeleteMember();

  return (
    <div className="flex gap-3 px-5 text-3xl  text-red-800">
      <Modal>
        <Modal.OpenButton openForm="member">
          <Button>
            <HiOutlinePencil />
          </Button>
        </Modal.OpenButton>
        <Modal.Window formName="member">
          <AddMemberForm member={member} />
        </Modal.Window>

        <Modal.OpenButton openForm="delete">
          <Button>
            <HiOutlineTrash />
          </Button>
        </Modal.OpenButton>
        <Modal.Window formName="delete">
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
