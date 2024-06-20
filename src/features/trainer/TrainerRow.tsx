import { HiMiniUser } from "react-icons/hi2";
import TrainerOptions from "./TrainerOptions";

interface TrainersDataTypes {
  id: string;
  image: string;
  name: string;
  phone: string;
  price?: number | null;
  category: string;
  created_at: string;
}

function TrainerRow({ trainer }: { trainer: TrainersDataTypes }) {
  return (
    <>
      <div className="col-[1_/_3] flex items-center gap-9 ">
        {trainer.image.split("/").at(-1) !== "undefined" ? (
          <img
            src={trainer.image}
            alt="trener"
            className="h-20 w-20 object-cover"
          />
        ) : (
          <HiMiniUser className="h-28 w-20 object-cover" />
        )}
        <h2>{trainer.name}</h2>
      </div>
      <p>{trainer.category}</p>
      <p>{trainer.price !== null ? `${trainer.price} zł` : " - "}</p>
      <TrainerOptions trainer={trainer} />
    </>
  );
}
export default TrainerRow;
