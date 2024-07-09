import { HiMiniUser } from "react-icons/hi2";
import { TrainersDataTypes } from "../../types/trainersTypes";
import TrainerOptions from "./TrainerOptions";

function TrainerRow({ trainer }: { trainer: TrainersDataTypes }) {
  return (
    <>
      <div className="col-[1_/_3] flex items-center gap-9 ">
        {trainer.image.split("/").at(-1) !== "undefined" ? (
          <img
            src={trainer.image}
            alt="trener"
            className="aspect-square h-20 object-cover object-top"
          />
        ) : (
          <HiMiniUser className="h-28 w-20 object-cover" />
        )}
        <h2 className="text-[12px] font-semibold uppercase tracking-wide text-lightAccentColor lg:text-sm">
          {trainer.name}
        </h2>
      </div>
      <p>{trainer.category}</p>
      <p>{trainer.price !== null ? `${trainer.price} zł` : " - "}</p>
      <TrainerOptions trainer={trainer} />
    </>
  );
}
export default TrainerRow;
