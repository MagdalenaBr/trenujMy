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
        <h2 className="uppercase text-sm font-semibold tracking-wide">{trainer.name}</h2>
      </div>
      <p className="text-slate-400">{trainer.category}</p>
      <p  className="text-slate-400">{trainer.price !== null ? `${trainer.price} zł` : " - "}</p>
      <TrainerOptions trainer={trainer} />
    </>
  );
}
export default TrainerRow;
