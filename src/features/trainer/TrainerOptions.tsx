import { Link } from "react-router-dom";
import {
  HiOutlinePencil,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi2";
import { useDeleteTrainer } from "./useDeleteTrainer";
import { TrainersDataTypes } from "../../types/trainersTypes";
import AddTrainerForm from "./AddTrainerForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import DeletePopup from "../../ui/DeletePopup";

function TrainerOptions({ trainer }: { trainer: TrainersDataTypes }) {
  const id = trainer?.id;
  const { deleteOneTrainer } = useDeleteTrainer();
  if (!id) return null;
  
  return (
    <div className="flex gap-2 px-5 text-2xl text-iconsColor">
      <Link
        to={`/trenerzy/${id}`}
        className="self-start border-2 border-transparent px-1 py-1 text-2xl hover:border-activeBkg"
      >
        <HiOutlineCalendar />
      </Link>
      <Modal>
        <Modal.OpenButton openForm="trainer">
          <Button>
            <HiOutlinePencil />
          </Button>
        </Modal.OpenButton>
        <Modal.Window formName="trainer">
          <AddTrainerForm trainer={trainer} />
        </Modal.Window>

        <Modal.OpenButton openForm="delete">
          <Button>
            <HiOutlineTrash />
          </Button>
        </Modal.OpenButton>
        <Modal.Window formName="delete">
          <DeletePopup handleDeleteItem={() => deleteOneTrainer(id)} />
        </Modal.Window>
      </Modal>
    </div>
  );
}
export default TrainerOptions;
